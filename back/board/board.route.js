const express = require('express')
const router = express.Router()
const controller = require('./board.controller')

router.get('/list',controller.getList)
router.post('/write',controller.postWrite)
router.get('/view/:id',controller.getView)
router.put('/modify/:id',controller.modify)
router.delete('/delete/:id',controller.delete)

module.exports=router
