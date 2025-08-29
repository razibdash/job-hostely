const jwt=require("jsonwebtoken")
const CheckLogin =  (req, res, next) => {
    const header = req.headers.authorization.split(' ')[1];
   
    if (!header) {
        return res.status(500).send({
            err: "False Attempted!",
        });
    }
     const token=header.split(' ')[1];
    
    const decoded =  jwt.verify(token, process.env.SECRET_KEY);
    const{email,id}=decoded.token;
    req.id=id;
    req.email=email;
   

    next();
}


module.exports = CheckLogin;