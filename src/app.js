require("dotenv").config()
const express = require("express")
const { adminAuth } = require("./middlewares/auth")
const app = express()
app.use("/admin", adminAuth)
const connectDatabase = require("./config/database")
const userModel = require("./models/user")

app.use(express.json())
app.post("/signup", async (req, res) => {
    const userData = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: req.body.password,
        email: req.body.email,
        age: req.body.age,
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
