const Users = require("./users-model");

function validateUser(req, res, next) {
  !req.body.username ||
  typeof req.body.username != "string" ||
  !req.body.username.trim()
    ? next({ status: 400, message: "username is required" })
    : !req.body.password ||
      typeof req.body.password != "string" ||
      !req.body.password.trim()
    ? next({ status: 400, message: "password is required" })
    : (req.user = {
        username: req.body.username.trim(),
        password: req.body.password.trim(),
      });
  next();
}

async function usernameIsUnique(req, res, next) {
  const user = await Users.findBy({ username: req.body.username }).first();
  user
    ? next({
        status: 400,
        message: `user '${req.user.username}' already exists`,
      })
    : next();
}

async function usernameExists(req, res, next) {
  const user = await Users.findBy({ username: req.user.username }).first();
  user == null
    ? next({
        status: 400,
        message: `user '${req.user.username}' does not exist`,
      })
    : (req.user = user);
  next();
}

module.exports = {
  validateUser,
  usernameIsUnique,
  usernameExists,
};
