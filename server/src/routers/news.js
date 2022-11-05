const express = require('express')
const News = require('../models/news')
const router = new express.Router()
const auth = require('../middleware/auth')

router.post('/api/news', auth, async (req, res) => {
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

router.get('/api/news', async (req, res) => {
  try {
    const news = await News.find({})

    res.send(news)
  } catch (e) {
    res.status(400).send(e)
  }
})

router.get('/api/news/:name', async (req, res) => {
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
