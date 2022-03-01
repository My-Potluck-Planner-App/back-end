
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Events').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('Events').insert([
        {id: 1, name: 'Party at Patty\'s', date: 01012031, time: 1015, location: '123 Main St.'},
        {id: 2, name: 'Dave\'s backyard BBQ', date: 02022023, time: 2000, location: 'my backyard'},
        {id: 3, name: 'Sunday Revival', date: 04152022, time: 0700, location: 'intersection of Jesus Ave and Osiris Pkwy'},
      ]);
    });
};
