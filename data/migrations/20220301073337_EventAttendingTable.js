
exports.up = function(knex) {
    return knex.schema.createTable('EventAttending', t => {
        t.integer('event')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('Events')
          .onUpdate('CASCADE')
          .onDelete('CASCADE');
        t.integer('user')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('Users')
          .onUpdate('CASCADE')
          .onDelete('CASCADE');
        t.primary(['event', 'user']);
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('EventAttending');
  };
  