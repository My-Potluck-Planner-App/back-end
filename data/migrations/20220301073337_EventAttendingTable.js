
exports.up = function(knex) {
    return knex.schema.createTable('EventAttending', t => {
        t.integer('event')
          .unsigned()
          .references('id')
          .inTable('Events')
          .onUpdate('CASCADE')
          .onDelete('CASCADE');
        t.integer('user')
          .unsigned()
          .references('id')
          .inTable('Users')
          .onUpdate('CASCADE')
          .onDelete('CASCADE');
        t.integer('status')
          .unsigned()
          .references('id')
          .inTable('Status')
          .onUpdate('CASCADE')
          .onDelete('CASCADE');
        t.primary(['event', 'user']);
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('EventAttending');
  };
  