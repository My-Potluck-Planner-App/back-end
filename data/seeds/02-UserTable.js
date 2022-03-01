
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('Users').insert([
        {id: 1, username: 'Bloom', password: 'Tech'},
        {id: 2, username: 'Lambda', password: 'University'},
        {id: 3, username: 'test', password: 'test'}
      ]);
    });
};
