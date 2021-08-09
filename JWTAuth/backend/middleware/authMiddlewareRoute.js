import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

const authMiddlewareRoute= (req,res,next) => {
    if (req.cookies.token) {console.log(`authMiddlewareRoute ==> Receive Cookie in the Server :  ${req.cookies.token}`.blue.underline)};
    const token = req.cookies.token;
    jwt.verify(token,'secretkey', async (err,decoded) => {
        console.log('Successfully Decoded Message in authMiddlewareRoute ==>', decoded.id);
        const {id} = decoded;
        console.log('decoded.id ==> ',decoded.id);
        // user = User.findById(decoded.id);
        const user = await User.findOne({ '_id':decoded.id });
        console.log('found user', user);
        });
    if (user) {
        // res.redirect('/api/users/mynotes');
        next();
    } else {
        res.status(401);
        res.redirect('/login');
        throw new Error("Not authorized, Token Not Found");
        
    };
};

export { authMiddlewareRoute };