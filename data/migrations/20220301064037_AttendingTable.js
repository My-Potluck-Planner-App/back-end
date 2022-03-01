
exports.up = function(knex) {
  return knex.schema.createTable('Attending', t => {
      t.increments();
      t.integer('name')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('Users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    t.integer('status')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('Status')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('Attending');
};
