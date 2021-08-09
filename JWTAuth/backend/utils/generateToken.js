import jwt from "jsonwebtoken";

const generateToken = (id) => {
  return jwt.sign({ id }, 'secretkey', { expiresIn: "1d" });
};

export default generateToken;
