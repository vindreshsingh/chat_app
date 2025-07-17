const mongoose = require("mongoose")
//const URI = "mongodb+srv://vindresh_singh:vindresh_singh@vindreshsingh.js69iij.mongodb.net/ChatApp"

const connectDatabase = async () => {
    await mongoose.connect(process.env.URI)
}

module.exports = connectDatabase
