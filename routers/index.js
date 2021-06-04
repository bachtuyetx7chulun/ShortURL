const path = require('path')
const { Router } = require('express')
const { getError } = require('../utils/error.util')
const {
    createShortUrl,
    getShortUrl,
    getShortUrls,
} = require('../controllres/url.controller')

const router = Router()

router.get('/', (req, res, next) => {
    const { query } = req
    if (
        query &&
        Object.keys(query).length === 0 &&
        query.constructor === Object
    ) {
        return res.sendFile(path.join(path.resolve(), '/public/main.html'))
    }
    return res.redirect('/error')
})
router.get('/short', getShortUrls)
router.get('/short/:slug', getShortUrl)
router.post('/short', createShortUrl)
router.get('/error', getError)

module.exports = router
