const express = require('express')
const router = express.Router()
const boards = require('../board/board.route')


router.use('/boards',boards)


module.exports = router