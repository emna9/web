/////userRoute //
const express = require("express");
const userRoute = express.Router();
const {
  getUsers,
  postUser,
  putUser,
  deleteUser,
  getOneUser,
  signIn,
  logout,
} = require("../controllers/userController");
const isAuth = require("../middleware/isAuth");
const isAutho = require("../middleware/isAutho");
userRoute.get("/users", getUsers);
userRoute.get("/users/:id", isAuth, isAutho(["user"]), getOneUser);
userRoute.post("/users", postUser);
userRoute.put("/users/:id", putUser);
userRoute.delete("/users/:id", isAuth, isAutho(["admin"]), deleteUser);
userRoute.post("/signIn", signIn);
userRoute.post("/logout", logout);
userRoute.get("/checkAuth", isAuth, (req, res) => {
  res.status(200).json({ msg: "Authenticated", role: req.user.role });
});

module.exports = userRoute;