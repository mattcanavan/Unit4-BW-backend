
exports.seed = function(knex) {
    return knex('user_favorites').insert([
        {
            user_id: 1,
            truck_id: 1
        },
        {
            user_id: 1,
            truck_id: 2
        },
        {
            user_id: 1,
            truck_id: 3
        },
        {
            user_id: 1,
            truck_id: 4
        },
        {
            user_id: 2,
            truck_id: 3
        }
        ])
    }