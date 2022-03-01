
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Status').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('Status').insert([
        {id: 1, Confirmed: true, Authed: false},
        {id: 2, Confirmed: false, Authed: false},
        {id: 3, Confirmed: false, Authed: true}
      ]);
    });
};
