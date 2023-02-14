const jwt = require("jsonwebtoken");
const User = require("../models/userModel.js");

const protect = async(req, res, next) => {

    let token
    
    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        try {
            token = req.headers.authorization.split(" ")[1];
            const userId = jwt.verify(token, process.env.JWT_SECRET).id
            req.user = await User.findById(userId).select("-password")

            next()
        } catch (error) {
            console.log(error)
            res.status(401)
        }
    }

    if(!token) {
        res.status(401);
    }
}

module.exports = {
    protect
}