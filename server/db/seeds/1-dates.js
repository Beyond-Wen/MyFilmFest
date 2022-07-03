/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.seed = function (knex) {
  return knex('dates').insert([
    {
      dateDigit: '0728',
      dayOfWeek: 'Friday',
      dateMonth: '28th July',
    },
    {
      dateDigit: '0729',
      dayOfWeek: 'Saturday',
      dateMonth: '29th July',
    },
    {
      dateDigit: '0739',
      dayOfWeek: 'Sunday',
      dateMonth: '30th July',
    },
    {
      dateDigit: '0801',
      dayOfWeek: 'Monday',
      dateMonth: '1st August',
    },
  ])
}
