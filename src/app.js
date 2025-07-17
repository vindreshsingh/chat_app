require("dotenv").config()
const express = require("express")
const { adminAuth } = require("./middlewares/auth")
const app = express()
app.use("/admin", adminAuth)
const connectDatabase = require("./config/database")
const userModel = require("./models/user")

app.post("/signup", async (req, res) => {
    const userData = {
        firstName: "Vindresh",
        lastName: "Singh",
        password: "12345678",
        email: "vindresh@gmail.com",
        age: 20,
    }
    const user = new userModel(userData)
    await user.save()
    res.send("User created successfully")
})

const port = 8000
connectDatabase()
    .then(() => {
        console.log("Database connected")
        app.listen(port, () => {
            console.log(`server is running on port ${port}`)
        })
    })
    .catch((err) => {
        console.log("Database connection error")
    })
