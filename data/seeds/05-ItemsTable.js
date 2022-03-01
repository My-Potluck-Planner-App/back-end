
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Items').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('Items').insert([
        {id: 1, name: 'rowValue1', event: 1, assignment: 3},
        {id: 2, name: 'rowValue1', event: 3, assignment: 2},
        {id: 3, name: 'rowValue1', event: 2, assignment: 1},
      ]);
    });
};
