/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = (knex) => {
  return knex('movies')
    .del()
    .then(() => knex('dates').del())
}
