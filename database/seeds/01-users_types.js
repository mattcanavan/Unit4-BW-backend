
exports.seed = function(knex) {
    return knex('users_types').insert([
        {user_type: "diner"},
        {user_type: "operator"},
    ]);
  };
  