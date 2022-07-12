/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = function (knex) {
  return knex('events').insert([
    {
      date_id: '1',
      movie_id: '1',
      time: '1100',
    },
    {
      date_id: '1',
      movie_id: '2',
      time: '1800',
    },
    {
      date_id: '2',
      movie_id: '3',
      time: '1030',
    },
    {
      date_id: '2',
      movie_id: '4',
      time: '2030',
    },
    {
      date_id: '3',
      movie_id: '1',
      time: '1145',
    },
    {
      date_id: '3',
      movie_id: '2',
      time: '2100',
    },
    {
      date_id: '4',
      movie_id: '3',
      time: '1015',
    },
    {
      date_id: '4',
      movie_id: '4',
      time: '1945',
    },
  ])
}
