
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('EventAttending').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('EventAttending').insert([
        {event: 1, user: 2, status: 3},
        {event: 2, user: 3, status: 1},
        {event: 3, user: 1, status: 2},
      ]);
    });
};
