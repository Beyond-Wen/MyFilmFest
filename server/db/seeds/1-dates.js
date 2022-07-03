/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.seed = function (knex) {
  return knex('dates').insert([
    {
      date: 'Friday 28th July',
    },
    {
      date: 'Saturday 29th July',
    },
    {
      date: 'Sunday 30th July',
    },
    {
      date: 'Monday 1st August',
    },
    {
      date: 'Tuesday 2nd August',
    },
    {
      date: 'Wednesday 3rd August',
    },
    {
      date: 'Thursday 4th August',
    },
    {
      date: 'Friday 5th August',
    },
    {
      date: 'Saturday 6th August',
    },
    {
      date: 'Sunday 7th August',
    },
  ])
}
