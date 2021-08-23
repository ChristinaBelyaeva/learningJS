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

for (let i = 0; i < 2; i++) {
  let a = prompt("Один из последних просмотренных фильмов?", "");
  let b = prompt("На сколько оцените его?", "");

  if (a != "" && b != "" && a != null && b != null && a.length < 50) {
    personalMovieDB.movies[a] = b;
    console.log('done');
  } else {
    console.log('Error');
    i--;
  }
}
console.log(personalMovieDB);


// let firstMovie = prompt("Один из последних просмотренных фильмов?", "");
// let firstRating = prompt("На сколько оцените его?", "");

// let secondMovie = prompt("Один из последних просмотренных фильмов?", "");
// let secondRating = prompt("На сколько оцените его?", "");

// personalMovieDB.movies[firstMovie] = firstRating;
// personalMovieDB.movies[secondMovie] = secondRating;

// console.log(personalMovieDB);

if (personalMovieDB.count < 10) {
  alert("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count < 30) {
  alert("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
  alert("Вы киноман");
} else {
  alert("Произошла ошибка");
}