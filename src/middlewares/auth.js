const adminAuth = (req, res, next) => {
    const token = "hello"
    const isAuthorized = token === "hello"
    if (!isAuthorized) {
        res.status(401).send("Unauthorized")
    } else {
        next()
    }
}
module.exports = {
    adminAuth,
}
