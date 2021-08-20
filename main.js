'use strict';
let numberOfFilms = +prompt("Сколько фильмов Вы уже посмотрели?", "");
console.log(numberOfFilms);

let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

let firstMovie = prompt("Один из последних просмотренных фильмов?", "");
let firstRating = prompt("На сколько оцените его?", "");
let secondMovie = prompt("Один из последних просмотренных фильмов?", "");
let secondRating = prompt("На сколько оцените его?", "");

personalMovieDB.movies[firstMovie] = firstRating;
personalMovieDB.movies[secondMovie] = secondRating;

console.log(personalMovieDB);