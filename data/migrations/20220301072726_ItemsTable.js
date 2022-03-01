
exports.up = function(knex) {
    return knex.schema.createTable('Items', t => {
        t.increments();
        t.string('name');
        t.integer('event')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('Events')
          .onUpdate('CASCADE')
          .onDelete('CASCADE');
        t.integer('assignment')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('Users')
          .onUpdate('CASCADE')
          .onDelete('CASCADE');
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('Items');
  };
  