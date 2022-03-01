
exports.up = function(knex) {
  return knex.schema.createTable('Status', t => {
      t.increments();
      t.boolean('Confirmed').default(false);
      t.boolean('Authed').default(false);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('Status');
};
