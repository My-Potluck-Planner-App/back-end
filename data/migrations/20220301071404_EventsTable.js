
exports.up = function(knex) {
    return knex.schema.createTable('Events', t => {
        t.increments();
        t.string('name').notNullable();
        t.integer('date').notNullable();
        t.integer('time').notNullable();
        t.string('location').notNullable();
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('Events');
  };
  