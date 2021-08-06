const express = require('express')
const News = require('../models/news')
const router = new express.Router()
const auth = require('../middleware/auth')
const multer = require('multer')
const sharp = require('sharp')

// const upload = multer({
//   limits: {
//     fileSize: 10000000,
//   },
//   fileFilter(req, file, cb) {
//     if (!file.originalname.match(/\.(jpg|jpeg|png|webp)$/)) {
//       return cb(new Error('Please upload image file'))
//     }
//     cb(undefined, true)
//   },
// })

// router.post(
//   '/news',
//   auth,
//   upload.single('image'),
//   async (req, res) => {
//     const news = new News({
//       ...req.body,
//     })

//     const buffer = await sharp(req.file.buffer)
//       .resize({ width: 700, height: 450 })
//       .webp()
//       .toBuffer()

//     news.image = buffer
//     try {
//       await news.save()
//       res.status(201).send(news)
//     } catch (e) {
//       res.status(400).send(e)
//     }
//   },
//   (error, req, res, next) => {
//     res.status(400).send({ error: error.message })
//   }
// )

router.post('/news', auth, async (req, res) => {
  const news = new News({
    ...req.body
  })

  try {
    await news.save()
    res.status(201).send(news)
  } catch (e) {
    res.status(400).send(e)
  }
})

router.get('/news', async (req, res) => {
  try {
    const news = await News.find({})

    res.send(news)
  } catch (e) {
    res.status(400).send(e)
  }
})

router.get('/news/:name', async (req, res) => {
  try {
    const news = await News.findOne({name: req.params.name})

    res.send(news)
  } catch (e) {
    res.status(404).send()
  }
})

// router.get('/news/image/:id', async (req, res) => {
//   try {
//     const news = await News.findById(req.params.id)

//     res.set('Content-Type', 'image/webp')
//     res.send(news.image)
//   } catch (e) {
//     res.status(404).send()
//   }
// })

module.exports = router
