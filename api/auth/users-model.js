const db = require("../../data/dbConfig");

module.exports = {
  add,
  find,
  findBy,
  findById,
  update,
  remove,
};

function find() {
  return db("Users");
}

function findBy(filter) {
  return db("Users").where(filter);
}

async function add(user) {
  const [id] = await db("Users").insert(user);

  return findById(id);
}

function findById(id) {
  return db("Users").where({ id }).first();
}

function update(id, user) {
  return db("Users")
    .where({ id })
    .update(user)
    .then(() => {
      return findById(id);
    });
}

async function remove(id) {
  const olduser = await findById(id);
  return db("Users")
    .where("id", id)
    .del()
    .then(() => {
      return olduser;
    });
}
