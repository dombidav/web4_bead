const express = require('express')
const db = require('../db').default
const router = express.Router();

router.get('/', async (req, res, next) =>{
    try {
        let results = await db.all('users')
        res.json(results)
    } catch (error) {
        res.sendStatus(500)
        res.json(error)
    }
})

router.get('/:id', async (req, res, next) =>{
    try {
        let results = await db.one('users', req.params.id)
        res.json(results)
    } catch (error) {
        res.sendStatus(500)
        res.json(error)
    }
})

module.exports = router