const userModel = require("../models/userModel");
const paymentModel = require("../models/paymentModel");
const commandModel = require("../models/commandModel");
const jwt = require("jsonwebtoken");
const { signUpErrors, signInErrors } = require("../utils/errorsUtils");
const { response } = require("express");
const ObjectId = require("mongoose").Types.ObjectId;

class APIfeatures {
  constructor(query, queryString) {
    (this.query = query), (this.queryString = queryString);
  }

  filtering() {
    const reqQuery = { ...this.queryString };

    const removeFields = ["select", "sort", "page", "limit"];

    removeFields.forEach((param) => delete reqQuery[param]);
    let queryStr = JSON.stringify(reqQuery);
    queryStr = queryStr.replace(
      /\b(gt|gte|lt|lte|regex)\b/g,
      (match) => `$${match}`
    );

    this.query.find(JSON.parse(queryStr));
    return this;
  }

  selecting() {
    if (this.queryString.select) {
      const fields = this.queryString.select.split(",").join(" ");
      this.query.select(fields);
    }

    return this;
  }

  sorting() {
    if (this.queryString.sort) {
      const sortBy = this.queryString.sort.split(",").join(" ");
      this.query.sort(sortBy);
    } else {
      this.query.sort("-createdAt");
    }
    return this;
  }

  pagination() {
    const page = this.queryString * 1 || 1;
    const limit = this.queryString * 1 || 50;
    const skip = (page - 1) * limit;
    this.query.skip(skip).limit(limit);
    return this;
  }
}

const maxAge = 3 * 24 * 60 * 60 * 1000;
const createAccessToken = (id) => {
  return jwt.sign({ id }, process.env.ACCESS_TOKEN, { expiresIn: "1d" });
};

const createRefreshToken = (id) => {
  return jwt.sign({ id }, process.env.REFRESH_TOKEN, { expiresIn: "7d" });
};
const userCtrl = {
  getUsers: async (req, res) => {
    try {
      // const features = await new APIfeatures(userModel.find(), req.query).filtering().selecting().sorting().pagination()

      const users = await userModel.find();

      return res.json({ users });
      // if(users){
      //   res.json({result: {
      //     status: 'success',
      //     result: users.length,
      //     users: users
      //   }})
      // }
    } catch (err) {
      return res.status(400).json({ msg: err.message });
    }
  },

  register: async (req, res) => {
    try {
      const {
        pseudo,
        ref,
        email,
        password,
        role,
        commune,
        tel,
        quartier,
        images,
        open,
        heur_debut_h,
        heur_debut_m,
        heur_fin_h,
        heur_fin_m,
      } = req.body;

      const user = await userModel.create({
        pseudo,
        ref,
        email,
        password,
        role,
        commune,
        tel,
        quartier,
        images,
        open,
        heur_debut_h,
        heur_debut_m,
        heur_fin_h,
        heur_fin_m,
      });
      const accesstoken = await createAccessToken(user._id);
      const refreshToken = await createRefreshToken(user._id);

      await res.cookie("refreshtoken", refreshToken, {
        httpOnly: true,
        path: "/user/refresh_token",
      });
      res.json({
        accesstoken,
        user,
      });
    } catch (err) {
      const errors = signUpErrors(err);
      return res.status(400).json({ msg: errors });
    }
  },

  updateUser: async (req, res) => {
    try {
      const abonne = await userModel.findByIdAndUpdate(req.params.id, {
        $set: {
          pseudo: req.body.pseudo,
          ref: req.body.ref,
          email: req.body.email,
          password: req.body.password,
          quartier: req.body.quartier,
          commune: req.body.commune,
          tel: req.body.tel,
          open: req.body.open,
          heur_debut_h: req.body.heur_debut_h,
          heur_debut_m: req.body.heur_debut_m,
          heur_fin_h: req.body.heur_fin_h,
          heur_fin_m: req.body.heur_fin_m,
          images: req.body.images,
        },
      });

      res.json({ abonne });
    } catch (error) {}
  },

  deleteUser: async (req, res) => {
    try {
      await userModel.remove({ _id: req.params.id }).exec();

      res.json("delete");
    } catch (err) {
      return res.status(400).json({ msg: err.message });
    }
  },

  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await userModel.login(email, password);
      console.log("email: ", email);
      const accessToken = await createAccessToken(user._id);
      const refreshToken = await createRefreshToken(user._id);

      await res.cookie("refreshtoken", refreshToken, {
        httpOnly: true,
        path: "/user/refresh_token",
      });

      res.json({ accessToken, user });
    } catch (err) {
      const errors = signInErrors(err);
      return res.status(400).json({ msg: errors });
    }
  },

  createPayement: async (req, res) => {
    if (!ObjectId.isValid(req.params.id))
      return res.send({ error: `ID unknown : ${req.params.id}` });

    try {
      await userModel.findByIdAndUpdate(req.params.id, {
        $push: {
          payement: {
            id: req.body.id,
            paymentID: req.body.paymentID,
            paymentPseudo: req.body.paymentPseudo,
            montant: req.body.montant,
            service: req.body.service,
          },
        },
      });

      res.json("payement effectuer");
    } catch (error) {
      console.log(error);
    }
  },

  ventes: async (req, res) => {
    if (!ObjectId.isValid(req.params.id))
      return res.send({ error: `ID unknown : ${req.params.id}` });
    try {
      console.log(req.body.ventes);
      await userModel.findByIdAndUpdate(req.params.id, {
        $push: {
          ventes: {
            id: req.body.id,
            name: req.body.name,
            email: req.body.email,
            tel: req.body.tel,
            quartier: req.body.quartier,
            commune: req.body.commune,
            montant: req.body.montant,
            qty: req.body.qty,
          },
        },
      });
    } catch (err) {}
  },

  trocs: async (req, res) => {
    if (!ObjectId.isValid(req.params.id))
      return res.send({ error: `ID unknown : ${req.params.id}` });
    try {
      console.log(req.body.trocs);
      await userModel.findByIdAndUpdate(req.params.id, {
        $push: {
          trocs: {
            id: req.body.id,
            images: req.body.images,
            name: req.body.name,
            weight: req.body.weight,
            email: req.body.email,
            tel: req.body.tel,
            quartier: req.body.quartier,
            commune: req.body.commune,
          },
        },
      });
    } catch (err) {}
  },

  getPayement: async (req, res) => {
    try {
      const payment = await userModel.findById(req.params.id);

      return res.json(payment);
    } catch (error) {}
  },

  historyVentes: async (req, res) => {
    const user = await userModel.findById(req.user);
    try {
      if (!user)
        return res.status(400).json({ msg: "L'utilisateur n'existe pas" });

      await userModel.findByIdAndUpdate(
        { _id: req.user },
        {
          $push: {
            historyVente: {
              name: req.body.name,
              email: req.body.email,
              tel: req.body.tel,
              quartier: req.body.quartier,
              commune: req.body.commune,
              montant: req.body.montant,
              qty: req.body.qty,
            },
          },
        }
      );

      res.json({ msg: "Ajouté au panier" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  historyTrocs: async (req, res) => {
    const user = await userModel.findById(req.user);
    try {
      if (!user)
        return res.status(400).json({ msg: "L'utilisateur n'existe pas" });
      await userModel.findByIdAndUpdate(
        { _id: req.user },
        {
          $push: {
            historyTroc: {
              name: req.body.name,
              email: req.body.email,
              tel: req.body.tel,
              quartier: req.body.quartier,
              commune: req.body.commune,
              weight: req.body.weight,
              images: req.body.images,
            },
          },
        }
      );

      res.json({ msg: "Ajouté au panier" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  valideVente: async (req, res) => {
    try {
      console.log("valide: ", req.body.valideVente);
      await userModel.findByIdAndUpdate(
        { _id: req.user },
        { $push: { valideVente: req.body.valideVente } }
      );

      res.json({ msg: "Ajouté au panier" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  valideTroc: async (req, res) => {
    try {
      await userModel.findByIdAndUpdate(
        { _id: req.user },
        { $push: { valideTroc: req.body.valideTroc } }
      );

      res.json({ msg: "Ajouté au panier" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  deteteVente: async (req, res) => {
    try {
      await userModel.findByIdAndUpdate(req.params.id, {
        $pull: { valideVente: { _id: req.body.id } },
      });

      res.json({ msg: "Ajouté au panier" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  deteteTroc: async (req, res) => {
    try {
      await userModel.findByIdAndUpdate(req.params.id, {
        $pull: { valideTroc: { _id: req.body.id } },
      });

      res.json({ msg: "Ajouté au panier" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  abonne: async (req, res) => {
    // const user = await userModel.findById(req.user)
    try {
      console.log(req.body.abonnes);
      await userModel.findByIdAndUpdate(req.params.id, {
        $push: { abonnes: req.body.abonnes },
      });

      res.json({ msg: "abonne" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  desabonne: async (req, res) => {
    // const user = await userModel.findById(req.user)
    try {
      await userModel.findByIdAndUpdate(req.params.id, {
        $pull: { abonnes: { _id: req.body.id } },
      });

      res.json({ msg: "Desabone" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  // addCart: async(req, res) =>{
  //   const user = await userModel.findById(req.user)
  //   try {
  //     if(!user) return res.status(400).json({msg: "L'utilisateur n'existe pas"})

  //   await userModel.findByIdAndUpdate(
  //     {_id: req.user},
  //     {$push:
  //       {cart: {
  //         cart: req.body.cart,
  //         service: req.body.service
  //     }}})

  //     res.json({msg: "Ajouté au panier"})
  //   } catch (err) {
  //     return res.status(500).json({msg: err.message})
  //   }

  // },

  addCart: async (req, res) => {
    const user = await userModel.findById(req.user);
    try {
      if (!user)
        return res.status(400).json({ msg: "L'utilisateur n'existe pas" });

      await userModel.findByIdAndUpdate(
        { _id: req.user },
        {
          $push: {
            cart: {
              id: req.body.id,
              images: req.body.images,
              name: req.body.name,
              email: req.body.email,
              quartier: req.body.quartier,
              commune: req.body.commune,
              tel: req.body.tel,
              service: req.body.service,
            },
          },
        }
      );

      res.json({ msg: "Ajouté au panier" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  deleteCart: async (req, res) => {
    const user = await userModel.findById(req.user);
    try {
      if (!user)
        return res.status(400).json({ msg: "L'utilisateur n'existe pas" });

      await userModel.findByIdAndUpdate(
        { _id: req.user },
        { $pull: { cart: { id: req.body.id } } }
      );

      res.json({ msg: "Ajouté au panier" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  refreshtoken: async (req, res) => {
    try {
      const rf_token = req.cookies.refreshtoken;

      if (!rf_token)
        return res.json({ msg: "veuillez vous connecter ou vous enregister" });
      jwt.verify(rf_token, process.env.REFRESH_TOKEN, (err, decodedToken) => {
        if (err)
          return res.json({
            msg: "veuillez vous connecter ou vous enregister",
          });

        const accessToken = createAccessToken(decodedToken.id);
        res.status(200).json({ accessToken });
      });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  logout: (req, res) => {
    try {
      res.clearCookie("refreshtoken", { path: "/user/refresh_token" });
      return res.json({ msg: "logged out" });
    } catch (err) {
      return res.status(400).json({ msg: err.message });
    }
  },

  history: async (req, res) => {
    try {
      const history = await paymentModel.find({ user_id: req.user });
      res.json(history);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  listes: async (req, res) => {
    try {
      const listes = await commandModel.find({ user_id: req.user });
      res.json(listes);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  getUser: async (req, res) => {
    try {
      const user = await userModel.findById(req.user).select("-password");
      // console.log("getUser: ",user);

      if (user) {
        res.json(user);
      }
    } catch (err) {
      return res.status(400).json({ msg: err.message });
    }
  },

  getUserRamassage: async (req, res) => {
    try {
      const ramassage = await userModel.find({ role: 3 });

      if (ramassage) res.json(ramassage);
    } catch (err) {}
  },

  getUserRecyclage: async (req, res) => {
    try {
      const recyclage = await userModel.find({ role: 2 });

      if (recyclage) res.json(recyclage);
    } catch (err) {}
  },

  getUserId: async (req, res) => {
    try {
      const user = await userModel.findById(req.params.id).select("-password");
      if (user) {
        res.json(user);
      }
    } catch (err) {
      return res.status(400).json({ msg: err.message });
    }
  },
};

module.exports = userCtrl;

// const userModel = require('../models/userModel')
// const paymentModel = require('../models/paymentModel')
// const commandModel = require('../models/commandModel')
// const jwt = require('jsonwebtoken')
// const { signUpErrors, signInErrors } = require('../utils/errorsUtils')
// const { response } = require('express')

// const maxAge = 3 * 24 * 60 * 60 * 1000
// const createAccessToken = (id) =>{
//   return jwt.sign({id}, process.env.ACCESS_TOKEN, {expiresIn: '1d'})
// }

// const createRefreshToken = (id) =>{
//   return jwt.sign({id}, process.env.REFRESH_TOKEN, {expiresIn: '7d'})
// }
// const userCtrl = {

//   getUsers: async (req, res) =>{
//     try {

//       const users = await userModel.find().select('-password')
//       if(users){
//         res.json({users})
//       }
//     } catch (err) {
//       return res.status(400).json({msg: err.message})
//     }
//   },

//   register: async (req, res)=>{
//     try {
//     const {pseudo,email, password} = req.body

//     console.log(email);

//     const user = await userModel.create({pseudo,email, password})
//       const accesstoken = await createAccessToken(user._id)
//       const refreshToken = await createRefreshToken(user._id)

//      await res.cookie('refreshtoken', refreshToken, {
//         httpOnly: true,
//         path: "/user/refresh_token",
//       })
//       res.json({
//         accesstoken,
//         user
//       })
//     } catch (err) {
//       const errors = signUpErrors(err)
//       return res.status(400).json({msg: errors})
//     }
//   },
//   getUser: async (req, res)=>{
//     try {
//       const user = await userModel.findById(req.user).select('-password')
//       console.log(user);
//       if(user){
//         res.json(user)
//       }
//     } catch (err) {
//       return res.status(400).json({msg: err.message})
//     }
//   },

//   abonne: async(req, res) =>{
//     // const user = await userModel.findById(req.user)
//     try {

//     await userModel.findByIdAndUpdate(
//       req.params.id,
//       {$push:{abonnes: req.body.id}})

//       res.json({})
//     } catch (err) {
//       return res.status(500).json({msg: err.message})
//     }
//   },

//   desabonne: async(req, res) =>{
//     // const user = await userModel.findById(req.user)
//     try {

//     await userModel.findByIdAndUpdate(
//       req.params.id,
//       {$pull:{abonnes: req.body.id}})

//       res.json({msg: "Ajouté au panier"})
//     } catch (err) {
//       return res.status(500).json({msg: err.message})
//     }
//   },

//   login: async(req, res)=>{
//     try {
//       const {email, password} = req.body
//       const user = await userModel.login(email, password)
//       const accessToken = await createAccessToken(user._id)
//       const refreshToken = await createRefreshToken(user._id)

//      await res.cookie('refreshtoken', refreshToken, {
//         httpOnly: true,
//         path: "/user/refresh_token",
//       })

//       res.json({accessToken, user})
//     } catch (err) {
//       const errors = signInErrors(err)
//       return res.status(400).json({msg: errors})
//     }
//   },

//   refreshtoken: async(req, res) =>{
//     try {
//       const rf_token = req.cookies.refreshtoken

//       if(!rf_token) return res.json({msg: 'veuillez vous connecter ou vous enregister'})
//         jwt.verify(rf_token, process.env.REFRESH_TOKEN, (err, decodedToken)=>{
//           if(err)  return res.json({msg: 'veuillez vous connecter ou vous enregister'})

//           const accessToken = createAccessToken(decodedToken.id)
//           res.status(200).json({accessToken})

//         })

//     } catch (err) {
//       return res.status(500).json({msg: err.message})
//     }
//   },

//   logout: (req, res) =>{
//     try {
//       res.clearCookie('refreshtoken', {path: "/user/refresh_token"})
//       return res.json({msg: "logged out"})
//     } catch (err) {
//       return res.status(400).json({msg: err.message})

//     }
//   },

//   addCart: async(req, res) =>{
//     const user = await userModel.findById(req.user)
//     try {
//       if(!user) return res.status(400).json({msg: "L'utilisateur n'existe pas"})

//     await userModel.findByIdAndUpdate(
//       {_id: req.user},
//       {$push: {cart: req.body.cart}})

//       res.json({msg: "Ajouté au panier"})
//     } catch (err) {
//       return res.status(500).json({msg: err.message})
//     }

//   },

//   deleteCart: async(req, res) =>{
//     const user = await userModel.findById(req.user)
//     try {
//       if(!user) return res.status(400).json({msg: "L'utilisateur n'existe pas"})

//     await userModel.remove({_id : req.user}).exec()

//       res.json({msg: "delete"})
//     } catch (err) {
//       return res.status(500).json({msg: err.message})
//     }

//   },

//   history: async(req, res) =>{
//     try {
//       const history = await paymentModel.find({user_id: req.user})
//     res.json(history)
//     } catch (err) {
//       return res.status(500).json({msg: err.message})
//     }
//   },

//   listes: async(req, res) =>{
//     try {
//       const listes = await commandModel.find({user_id: req.user})
//     res.json(listes)
//     } catch (err) {
//       return res.status(500).json({msg: err.message})
//     }
//   },

//   getUserRamassage: async (req, res) =>{
//     try {
//       const ramassage = await userModel.find({role: 3})

//       if(ramassage) res.json(ramassage)
//     } catch (err) {

//     }
//   },

//   getUserRecyclage: async (req, res) =>{
//     try {
//       const recyclage = await userModel.find({role: 2})

//       if(recyclage) res.json(recyclage)
//     } catch (err) {

//     }
//   },

//   getUserId: async (req, res)=>{
//     try {
//       const user = await userModel.findById(req.params.id).select('-password')
//       if(user){
//         res.json(user)
//       }
//     } catch (err) {
//       return res.status(400).json({msg: err.message})
//     }
//   }
// }

// module.exports = userCtrl
