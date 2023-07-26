const jwt = require('jsonwebtoken');


const generateToken = (user) => {
    const token = jwt.sign(user.toObject(), "loginapikey");
    return token;

}


const verifyToken = (req,res,next) => {

    // console.log(req.headers);
    const decoded = jwt.verify(req.headers.authorization,"loginapikey");

    if(!decoded){

  return res.json("wrong token");
    }

    req.user = decoded;
    next();


    
}

module.exports = {generateToken, verifyToken};