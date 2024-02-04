const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const {isEmail} = require('validator')

const SchemaUser = new mongoose.Schema(
  {
    ref:{
      type: String,
      unique: true
    },

    pseudo: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },

    email: {
      type: String,
      required: true,
      validate: [isEmail],
      lowercase: true,
      unique: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
      max: 1024,
      minlength: 6
    },

    open: {
      type: Number
    },

    heur_debut_h:{
      type: Number
    },

    heur_debut_m:{
      type: Number
    },


    heur_fin_h:{
      type: Number
    },

    heur_fin_m:{
      type: Number
    },

    payement:{
      type: [
        {
          id: String,
          paymentID: String,
          paymentPseudo: String,
          montant: Number,
          service: String,
        }
      ],
    },

    ventes: {
      type: {
        id: String,
        name: String,
        email: String,
        tel: String,
        quartier: String,
        commune: String,
        montant: Number,
        qty: Number
      }
    },

    trocs: {
      type: {
        id: String,
        images: Object,
        name: String,
        weight: Number,
        email: String,
        tel: String,
        quartier: String,
        commune: String,
      }
    },

    historyVente:{
      type: {
        name: String,
        email: String,
        tel: String,
        quartier: String,
        commune: String,
        montant: Number,
        qty: Number
      }
    },

    historyTroc: {
      type: {
        name: String,
        email: String,
        tel: String,
        quartier: String,
        commune: String,
        weight: Number,
        images: Object
      }
    },

    valideVente: {
      type: Array,
      default: []
    },

    valideTroc: {
      type: Array,
      default: []
    },
    // cart: {
    //   type: {
    //     cart: Array,
    //     service: String
    //   },
    // },

    cart: {
      type: {
        id: String,
        images: Object,
        name: String,
        email: String,
        quartier: String,
        commune: String,
        tel: String,
        service: String,
      },  
  },

    quartier: {
      type: String,
    },

    commune: {
      type: String
    },

    tel: {
      type: String
    },

    images:{
      type: Object,
    },

    abonnes:{
      type: Array,
      default: []
    },

    role: {
      type: Number,
      default: 0
    },

  },
  {
    timestamps: true
  }
)

SchemaUser.pre('save', async function(next){
  const salt = await bcrypt.genSalt()
  this.password = await bcrypt.hash(this.password, salt)
  next()
})

SchemaUser.statics.login = async function(email, password){
  const user = await this.findOne({email})
  if(user){
    const auth = await bcrypt.compare(password, user.password)
    if(auth){
      return user
    }
    throw Error('Password incorrect')
  }
  throw Error("Email incorrect") 
}

module.exports = mongoose.model('user', SchemaUser)