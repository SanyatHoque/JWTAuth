import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

const protectAPI = async (req, res, next) => {

  let token;
  if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
    try {
      token = req.headers.authorization.split(" ")[1];
      //decodes token id
      const decoded = jwt.verify(token, 'secretkey');
        if (decoded) {
          console.log('Decoded Message in protectAPI ==> ', decoded);
          req.user = await User.findById(decoded.id).select("-password");
          next();
        } else {
          res.status(401);
          throw new Error("Not authorized, token verify failed");
        };
    } catch (error) {
      res.status(401);
      throw new Error("Not authorized, no token");
    }
  };
};

export { protectAPI };
