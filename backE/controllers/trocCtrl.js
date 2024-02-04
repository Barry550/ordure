const trocModel = require('../models/trocModel')

const trocCtrl = {
  getTrocs: async (req, res) =>{
    try {  
      const troc = await trocModel.find().sort({createdAt: -1})
      if(troc){
        res.json(troc)
      }
    } catch (err) {
      return res.status(400).json({msg: err.message})
    }
  },

  createTrocs: async (req, res) =>{
    try {
      const {desc, weight, images} = req.body
      const troc = await trocModel.findOne({desc, weight, images})
      // if(troc) return res.json({msg: "cette catégorie existe déjà"})
      const newTroc = new trocModel({
        desc, weight, images
      })

      await newTroc.save((err, data)=>{
        if(err) throw err

        res.json(data)
      })
  
    } catch (err) { 
     return res.status(400).json({msg: err.message})   
    }
  },
    
  deleteTrocs: async (req, res) =>{
    try {
      await trocModel.findByIdAndDelete(req.params.id)
      res.json({msg: "troc supprimé"})
    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
  },

  updateTrocs: async (req, res) =>{
    try {
      const {images, desc, weight} = req.body
      const troc = await trocModel.findOneAndUpdate(
        {_id: req.params.id},
        {images, desc, weight},
      )
      res.json({troc})
    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
  }

}

module.exports = trocCtrl