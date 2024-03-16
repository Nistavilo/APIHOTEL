const { getSingleHotel } = require('../controllers/hotel')
const {typeByCity,typeByCount,createHotel,updateHotel,deleteHotel,getAllHotel,getSingleHotel}=require('../controllers/hotel.js ')
const express = require('express')


const router = express.Router()

router.get('/typeByCity',typeByCity)
router.get('/createHotel',createHotel)
router.get('/typeByCount',typeByCount)
router.get('/updateHotel/:id',updateHotel)
router.get('/deleteHotel/:id',deleteHotel)
router.get('/getSingleHotel/:id',getSingleHotel)
router.get('/getAllHotel',getAllHotel)

module.exports=router