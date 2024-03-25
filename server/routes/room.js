const {createRoom,updateRoom,deleteRoom,getDetailRoom,getAllRoom} = require('..controllers/room.js')    
const express = require('express')
const {verifyAdmin} = require('../middleware/verify.js')

const router = express.Router()

router.get('/getAllRoom',getAllRoom)
router.get('/getDetailRoom/:id',getAllRoom)
router.get('/updateRoom/:id',verifyAdmin,updateRoom)
router.get('/creatRoom/:id/:hotelid',verifyAdmin,createRoom)
router.get('/deleteRoom/:id/:hotelid',verifyAdmin,deleteRoom)


module.exports=router