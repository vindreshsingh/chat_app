const mongoose = require("mongoose")

const connectDatabase = async () => {
    await mongoose.connect(process.env.DB_URI)
}

module.exports = connectDatabase
