import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

const authMiddlewareRoute= (req,res,next) => {
    try {
        if (req.cookies.token) {
            console.log(`authMiddlewareRoute ==> Receive Cookie in the Server :  ${req.cookies.token}`.blue.underline);
            const token = req.cookies.token;
            jwt.verify(token,'secretkey', async (err,decoded) => {
                console.log('Successfully Decoded Message in authMiddlewareRoute ==>', decoded.id);
                const {id} = decoded;
                const user = await User.findOne({ '_id':decoded.id });
                console.log('found user', user);
                });
                next();
            };
            // if (user) { next() }; 
    } catch(err) {
        res.status(401);
        throw new Error("Not authorized, User Not Verified",err);
        
    };
};

export { authMiddlewareRoute };

