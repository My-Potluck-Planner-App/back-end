const db = require("../../data/dbConfig.js");

module.exports = {
  add,
  find,
  findBy,
  findById,
  update,
  remove,
};

function find() {
  return db("Events").select("name", "date", "time", "location");
}

function findBy(filter) {
  return db("Events").where(filter);
}

async function add(event) {
  const [id] = await db("Events").insert(event);

  return findById(id);
}

function findById(id) {
  return db("Events").where({ id }).first();
}

function update(id, event) {
  db("Events")
    .where({ id })
    .update(event)
    .then(() => {
      return findById(id);
    });
}

function remove(id) {
  return db("Events").where("id", id).del();
}
