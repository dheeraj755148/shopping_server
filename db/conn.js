const mongoose = require("mongoose")

const Db = process.env.DATABASE

mongoose.connect(Db).then(()=>console.log("Database connected")).catch((error)=>console.log(error))

