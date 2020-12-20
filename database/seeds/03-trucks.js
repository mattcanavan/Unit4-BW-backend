
exports.seed = function(knex) {
    return knex('trucks').insert([
        {truck_name: "Tacos R Us",
        truck_owner_id: 3,
        truck_img_url: "",
        cusine_type: "Mexican",
        current_location_lat: "-77.508333",
        current_location_long: "164.754167",
    },

    {truck_name: "Only Beer",
        truck_owner_id: 3,
        truck_img_url: "",
        cusine_type: "Beer",
        current_location_lat: "16.293869",
        current_location_long: "26.2199",
    },

    {truck_name: "Bahn Mi for Free",
        truck_owner_id: 3,
        truck_img_url: "",
        cusine_type: "Thai",
        current_location_lat: "0.848219",
        current_location_long: "47.829176",
    },

    {truck_name: "Korean Cookin",
    truck_owner_id: 4,
    truck_img_url: "",
    cusine_type: "Korean",
    current_location_lat: "21.444676",
    current_location_long: "14.139108",
},

    ]);
  };
  