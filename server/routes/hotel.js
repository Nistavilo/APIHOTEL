const { getSingleHotel } = require('../controllers/hotel')
const {typeByCity,typeByCount,createHotel,updateHotel,deleteHotel,getAllHotel,getSingleHotel}=require('../controllers/hotel.js ')
const express = require('express')
const {verifyAdmin} = require('../middleware/verify.js')

const router = express.Router()

router.get('/typeByCity',typeByCity)
router.get('/typeByCount',typeByCount)
router.get('/createHotel',verifyAdmin,createHotel)
router.get('/updateHotel/:id',verifyAdmin,updateHotel)
router.get('/deleteHotel/:id',verifyAdmin,deleteHotel)
router.get('/getSingleHotel/:id',getSingleHotel)
router.get('/getAllHotel',getAllHotel)

module.exports=router