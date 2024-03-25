const {allUser,detailUser,deleteUser,updateUser} = require('../controllers/user.js')
const {verifyAdmin,verifyUser} = require('../middleware/verify.js')

const express = require('express')


const router = express.Router()


router.get('/allUser',verifyAdmin,allUser)
router.get('detailUser/:id',verifyUser,detailUser)
router.get('/deleteUser/:id',verifyUser,deleteUser)
router.get('/updateUser/:id',verifyUser,updateUser)





module.exports = router