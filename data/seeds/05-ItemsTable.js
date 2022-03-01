
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Items').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('Items').insert([
        {id: 1, name: 'coleslaw', event: 2, assignment: 3},
        {id: 2, name: 'potato salad', event: 3, assignment: 1},
        {id: 3, name: 'BBQ', event: 1, assignment: 2},
      ]);
    });
};
