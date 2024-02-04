const mongoose = require('mongoose')

const SchemaTroc = new mongoose.Schema(
  {
      images: {
          type: Object
      },

      desc: {
          type: String,
      },

      weight:{
          type: Number
      }
  },
    
  {
    timestamps: true
  }
)

module.exports = mongoose.model('troc', SchemaTroc)

  