/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.seed = function (knex) {
  return knex('movies').insert([
    {
      name: 'Decision to Leave',
      director: 'Park Chan-Wook',
      length: '138 min',
      language: 'Korean',
      image: 'https://pbs.twimg.com/media/FQTALZNUcAQjw3d.jpg:large',
    },
    {
      name: 'Boy From Heaven',
      director: 'Tarik Saleh',
      length: '126 min',
      language: 'Arabic',
      image:
        'https://m.media-amazon.com/images/M/MV5BOTk5YWQyMGQtN2ViNi00MGRkLTgwMjgtODcwNTkwNTMwYmJkXkEyXkFqcGdeQXVyMTM5NTczMjkz._V1_.jpg',
    },
    {
      name: 'Close',
      director: 'Lukas Dhont',
      length: '105 min',
      language: 'Dutch/French',
      image:
        'https://m.media-amazon.com/images/M/MV5BMDI0NDYyOTUtOWUyOS00OTFjLWIzY2MtMDk1YjdkNWMzOTBkXkEyXkFqcGdeQXVyODA0MjgyNzM@._V1_.jpg',
    },
    {
      name: 'Triangle of Sadness',
      director: 'Ruben Ostlund',
      length: '150 min',
      language: 'English',
      image:
        'https://d32qys9a6wm9no.cloudfront.net/images/movies/poster/e1/399e61e733acd7644ebe25cd455ec1f7_original.jpg?t=1655781914',
    },
  ])
}

//

// {
//   name:'',
//   director:'',
//   length:'',
//   language:'',
//   ima// {
//   name:'',
//   director:'',
//   length:'',
//   language:'',
//   ima// {
//   name:'',
//   director:'',
//   length:'',
//   language:'',
//   ima// {
//   name:'',
//   director:'',
//   length:'',
//   language:'',
//   ima// {
//   name:'',
//   director:'',
//   length:'',
//   language:'',
//   ima// {
//   name:'',
//   director:'',
//   length:'',
//   language:'',
//   ima
