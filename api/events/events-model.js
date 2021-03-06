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
  return db("Events");
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
  return db("Events")
    .where({ id })
    .update(event)
    .then(() => {
      return findById(id);
    });
}

async function remove(id) {
  const oldEvent = await findById(id);
  return db("Events")
    .where("id", id)
    .del()
    .then(() => {
      return oldEvent;
    });
}
