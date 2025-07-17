const mongoose = require("mongoose")

const connectDatabase = async () => {
    await mongoose.connect(process.env.URI)
}

module.exports = connectDatabase
