const mongoose = require(mongoose)

const db = ()=>{
    mongoose.connect(process.env.MONGO_URL,{
        useNewUrlParser: true,
        useUnifiedTopology:true
    })
    .then(()=> {
        console.log("mongo_db connectttt")
    })
    .catch((err)=>{
        console.log(err)
    })
}

module.exports = db;