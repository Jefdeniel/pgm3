// local storage

/**
 * Methods to use
 * localStorage.setItem('key', 'value');
 * localStorage.getItem('key');
 * localStorage.removeItem('key');
 * localStorage.clear();
 *
 * localStorage.key(0); // met de index dus
 * localStorage.length;
 */

const myName = "Jef";
localStorage.setItem("firstName", myName);

// 1. Get the name from the user
const aName = localStorage.getItem("firstName");

// 2. Get the age from the user
// const age = localStorage.getItem("age");
const MyAge = 26;
localStorage.setItem("age", JSON.stringify(MyAge));
const myAgeAgain = JSON.parse(localStorage.getItem("age"));
console.log(myAgeAgain, typeof myAgeAgain);

// 3. Get the favorite movies from the user
const movies = ["The Matrix", "The Notebook", "The Lion King"];
localStorage.setItem("movies", JSON.stringify(movies));
const moviesAgain = JSON.parse(localStorage.getItem("movies"));
console.log(moviesAgain, typeof moviesAgain);

document.write(
  `Welcome back ${aName}, you are ${myAgeAgain} years old and your favorite movies are ${movies}`
);

// 4. Delete your name from the local storage
localStorage.removeItem("firstName");
