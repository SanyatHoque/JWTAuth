import User from "../models/userModel.js";
import Program from "../models/programModel.js";
import generateToken from "../utils/generateToken.js";

const authUser = async (req, res, next) => {
  const { name, email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    res.json({
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
    if (req.cookies.token) {console.log(`authUser ==> Receive Cookie in the Server :  ${req.cookies.token}`.cyan.underline)};
    next();
    } else {
    res.status(401);
    throw new Error("Invalid Email or Password");
  }
};
const registerUser = async (req, res,next) => {
  const { name, email, password, firstname, lastname, preferredname, status, room, levelofcare, ambulation, birthdate, moveindate, ID, author  } = req.body;
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(404);
    throw new Error("User already exists");
  }
  const user = await User.create({name, email, password, firstname, lastname, preferredname, status, room, levelofcare, ambulation, birthdate, moveindate, ID, author });
  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      // token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("User not found");
  }
  next();
};

const getUsers = async (req,res,next) => {
  User.find({}, function(err, users) {
    // console.log('Users',users)
    res.status(201).json({
      usersAll: users,
      // token: generateToken(user._id),
    });
 });
  if (!users) {
    res.status(404);
    throw new Error("Users not found");
  }

  next();
};

const getPrograms = async (req,res,next) => {
  Program.find({}, function(err, programs) {
    res.status(201).json({
      programsAll: programs,
      // token: generateToken(user._id),
    });
 });
  if (!programs) {
    res.status(404);
    throw new Error("Users not found");
  }
  next();
};

export { authUser,registerUser,getUsers,getPrograms };
