const mongoose = require('mongoose')

const newsSchema = new mongoose.Schema({
  imagePath: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true,
    unique: true
  },
  title: {
    type: String,
    trim: true,
    required: true
  },
  description: {
    type: String,
    trim: true,
    required: true,
    maxLength: 200
  }
}, {
  timestamps: true
})

const News = mongoose.model('News', newsSchema)

module.exports = News