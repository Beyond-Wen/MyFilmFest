/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.seed = function (knex) {
  return knex('dates').insert([
    {
      date: 'Saturday 29th July',
      showdate_id: '0729',
    },
    {
      date: 'Sunday 30th July',
      showdate_id: '0730',
    },
    {
      date: 'Monday 1st August',
      showdate_id: '0801',
    },
    {
      date: 'Tuesday 2nd August',
      showdate_id: '0802',
    },
    {
      date: 'Wednesday 3rd August',
      showdate_id: '0803',
    },
    {
      date: 'Thursday 4th August',
      showdate_id: '0804',
    },
    {
      date: 'Friday 5th August',
      showdate_id: '0805',
    },
    {
      date: 'Saturday 6th August',
      showdate_id: '0806',
    },
    {
      date: 'Sunday 7th August',
      showdate_id: '0807',
    },
  ])
}
