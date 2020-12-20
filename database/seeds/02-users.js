require("dotenv").config();
const bcryptjs = require('bcryptjs');

const hash = bcryptjs.hashSync(process.env.USER, parseInt(process.env.BCRYPT_ROUNDS));

exports.seed = function(knex) {
    return knex('users').insert([
        {username: "first",
         password: hash, 
         email: "example@.net",
         user_type_id: 1,              //diner
         current_location_lat: "",
         current_location_long: "",
        },

        {username: "second",
         password: hash, 
         email: "example@.net",
         user_type_id: 1,              //diner
         current_location_lat: "",
         current_location_long: "",
        },

        {username: "third",
        password: hash, 
        email: "example@.net",
        user_type_id: 2,               //operator
        current_location_lat: "",
        current_location_long: "",
       },

       {username: "fourth",
       password: hash, 
       email: "example@.net",
       user_type_id: 2,                //operator
       current_location_lat: "",
       current_location_long: "",
      }
    ]);
  };
  