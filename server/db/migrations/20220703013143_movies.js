/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('movies', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.string('director')
    table.string('length')
    table.string('language')
    table.string('image')
    // table.integer('first_showdate_id').references('dates.numberformat')
    // table.string('first_showtime')
    // table.integer('second_showdate_id').references('dates.numberformat')
    // table.string('second_showtime')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('movies')
}
