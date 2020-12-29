
exports.up = function(knex) {
    return knex.schema
    .createTable('users_types', tbl => {
        tbl.increments('user_type_id')
        tbl.text('user_type')
    })

    .createTable('users', tbl => {
          tbl.increments('user_id')
          tbl.text('username', 128).notNullable().unique()
          tbl.text('password', 256).notNullable()
          tbl.text('email', 128).notNullable()
          tbl.integer('user_type_id').unsigned().notNullable().defaultTo(1)   //diner, lowest permissions.
          .references('user_type_id').inTable('users_types')
          .onDelete('RESTRICT').onUpdate('RESTRICT')
          tbl.decimal('current_location_lat', 128)
          tbl.decimal('current_location_long', 128)
          tbl.timestamps(true, true)    // Adds created_at and updated_at columns on the database, setting each to datetime types. table.timestamps([useTimestamps], [defaultToNow])
        })
        
    .createTable('trucks', tbl => {
        tbl.increments('truck_id')
        tbl.text('truck_name').notNullable().unique()
        tbl.integer('truck_owner_id').unsigned().notNullable()
        .references('user_id').inTable('users')
        .onDelete('RESTRICT').onUpdate('RESTRICT')
        tbl.text('truck_img_url', 128)
        tbl.text('cusine_type', 128).notNullable()
        tbl.decimal('current_location_lat', 128).notNullable()
        tbl.decimal('current_location_long', 128).notNullable()
        tbl.timestamps(true, true)    // Adds created_at and updated_at columns on the database, setting each to datetime types. table.timestamps([useTimestamps], [defaultToNow])
  })

    .createTable('menus', tbl => {
        tbl.increments('item_id')
        tbl.integer('truck_id').unsigned().notNullable()
        .references('truck_id').inTable('trucks')
        .onDelete('RESTRICT').onUpdate('RESTRICT')  //might allow unrestricted updating later
        tbl.text('item_name', 128).notNullable()
        tbl.text('item_description', 128)    //might make nullable later
        tbl.text('item_img_url', 128)   //might make nullable later or add default url?
        tbl.decimal('item_price').notNullable()
    })

    .createTable('trucks_reviews', tbl => {
        tbl.increments('review_id')
        tbl.integer('truck_id').unsigned().notNullable()
        .references('truck_id').inTable('trucks')
        .onDelete('RESTRICT').onUpdate('RESTRICT')  //might allow unrestricted updating later
        tbl.integer('user_id').unsigned().notNullable()
        .references('user_id').inTable('users')
        .onDelete('RESTRICT').onUpdate('RESTRICT')
        tbl.integer('food_quality_star_count').notNullable()
        tbl.integer('service_star_count').notNullable()
        tbl.integer('cleanliness_star_count').notNullable()
        tbl.text('comment', 228)
    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('users_types')
    .dropTableIfExists('users')
    .dropTableIfExists('trucks')
    .dropTableIfExists('menus')
    .dropTableIfExists('trucks_reviews')
  
};
