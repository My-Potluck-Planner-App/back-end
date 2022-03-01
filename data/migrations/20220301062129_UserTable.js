
exports.up = function(knex) {
  return knex.schema.createTable('Users', t => {
      t.increments();
      t.string('username').unique().notNullable();
      t.string('password').notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('Users');
};
