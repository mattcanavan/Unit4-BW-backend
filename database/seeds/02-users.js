require("dotenv").config();
const bcryptjs = require('bcryptjs');

// const hash = bcryptjs.hashSync(process.env.USER, parseInt(process.env.BCRYPT_ROUNDS));
const hash = bcryptjs.hashSync("this_is_a_fake_password_for_seeding_purposes_only", 10);

exports.seed = function(knex) {
    return knex('users').insert([
        {username: "first",
         password: hash, 
         email: "example@.net",
         user_type_id: 1,              //diner
         current_location_lat: 0,
         current_location_long: 0,
        },

        {username: "second",
         password: hash, 
         email: "example@.net",
         user_type_id: 1,              //diner
         current_location_lat: 0,
         current_location_long: 0,
        },

        {username: "third",
        password: hash, 
        email: "example@.net",
        user_type_id: 2,               //operator
        current_location_lat: 0,
        current_location_long: 0,
       },

       {username: "fourth",
       password: hash, 
       email: "example@.net",
       user_type_id: 2,                //operator
       current_location_lat: 0,
       current_location_long: 0,
      }
    ]);
  };
  