const jwt = require("jsonwebtoken")

const protect = async(req, res, next) => {
    let token

    // if(req.headers.authorization && req.headers.authorization.startWith("Bearer")) {
    //     try {
    //         token = 
    //     } catch (error) {
            
    //     }
    // }
}

module.exports = {
    protect
}