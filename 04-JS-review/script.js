const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: false,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}
/*
//Destructuring
const book = getBook(3);

// const title = book.title;
// const author = book.author;

//Object destructuring

const {
  title,
  author,
  pages,
  publications,
  genres,
  hasMovieAdaptation,
  publicationDate,
} = book;

console.log(author, title, genres);

// const primaryGenre = genres[0];
// const secondaryGenre = genres[1];

//If we want to get tow first elements
//const [primaryGenre, secondaryGenre, ...otherGenres] = genres;

//Rest operator
const [primaryGenre, secondaryGenre, ...otherGenres] = genres;

console.log(primaryGenre, secondaryGenre, otherGenres);

//spread operator
const newGenres = [...genres, "epic fantasy"];
console.log(newGenres);

//object spread operator
const updatedBook = {
  ...book,
  //Adding new property
  moviePublicationDte: "2001-12-19",

  //Overwriting an existing property
  pages: 1210,
};
updatedBook;

//arrow function
// function getYear(str) {
//   return str.split("-")[0];
// }
// const getYear = (str) => str.split("-")[0];

const getYear = (str) => str.split("-")[0];

const summary = `${title}, a ${pages}-pages long book, was written by ${author} and published in  ${getYear(
  publicationDate
)}. The book has ${hasMovieAdaptation ? "" : "not"} been adapted as a movie`;
summary;

//ternary operator
const pagesRange = pages > 1000 ? "over a thousand" : "less than 1000";
pagesRange;

console.log(`The book has ${pagesRange} pages.`);

//short-circuiting
// && operator returns the first falsy value or the last value if all are truthy
console.log(true && "some string");
console.log(false && "some string");
console.log(hasMovieAdaptation && "This book has a movie");

//falsy:[ 0, '', null, undefined? false]
console.log("jonas" && "Some string");
console.log(0 && "Some string");

// || operator returns the first truthy value or the last value if all are falsy
console.log(true || "some string");
console.log(false || "some string");

console.log(book.translations.spanish);

const spanishTranslation = book.translations.spanish || "No translation";
spanishTranslation;

//console.log(book.reviews.librarything.reviewsCount);
//const countWrong = book.reviews.librarything.reviewsCount || "No data";
//countWrong;

//Nullish coalescing operator
// ?? operator returns the first defined value or the last value if all are undefined or null
//const count = book.reviews.librarything.reviewsCount ?? "No data";
//count;

//Optional chaining operator

function getTotalReviewCount(book) {
  const goodReads = book.reviews.goodreads.reviewsCount;
  //In the case of id:3 there is no librarything property so we get an error if we try to access it directly as above so we use optional chaining operator
  const libraryThing = book.reviews.librarything?.reviewsCount ?? 0;
  return goodReads + libraryThing;
}

console.log(getTotalReviewCount(book));
*/
//Array methods
/*
function getTotalReviewCount(book) {
  const goodReads = book.reviews.goodreads.reviewsCount;
  //In the case of id:3 there is no librarything property so we get an error if we try to access it directly as above so we use optional chaining operator
  const libraryThing = book.reviews.librarything?.reviewsCount ?? 0;
  return goodReads + libraryThing;
}

//map method
const books = getBooks();

const x = [1, 2, 3, 4, 5].map((n) => n * 2);
console.log(x);

const titles = books.map((book) => book.title);
titles;

const essentialData = books.map((book) => ({
  title: book.title,
  author: book.author,
  reviewsCount: getTotalReviewCount(book),
}));
essentialData;

//filter method
const longBooks = books
  .filter((book) => book.pages > 500)
  .filter((book) => book.hasMovieAdaptation);
longBooks;

const adventure = books
  .filter((book) => book.genres.includes("adventure"))
  .map((book) => book.title);
adventure;

//reduce method
const pagesAllBooks = books.reduce((acc, book) => acc + book.pages, 0);
pagesAllBooks;

//sort method
//sort changes the original array
//to avoid this we can use slice method
const arr = [1, 7, 2, 9, 5];
const sorted = arr.slice().sort((a, b) => a - b);
sorted;
arr;

const sortedByPages = books.slice().sort((a, b) => a.pages - b.pages);
sortedByPages;

//immutable array methods
//add delete elements from array without changing the original array

// Add book object to array

const newBook = {
  id: 6,
  title: "Harry Potter and the chamber of Secrets",
  author: "J.K. Rowling",
};

const booksAfterAdd = [...books, newBook];
booksAfterAdd;

//Delete book object from array
const booksAfterDelete = booksAfterAdd.filter((book) => book.id !== 3);
booksAfterDelete;

//Update book object in array
const booksAfterUpdate = booksAfterDelete.map((book) =>
  book.id === 1 ? { ...book, pages: 1210 } : book
);
booksAfterUpdate;
*/
//Promise:
//Asynchronous is a programming paradigm in which a process operates independently of other processes
//In this case we don't know when the data will be available so we use promise to handle this situation and we can use then method to get the data when it is available.
// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((response) => response.json())
//   .then((data) => console.log(data));

// console.log("Hassan");

//Async/Await
async function getTodo() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await response.json();
  console.log(data);

  return data;
}

const todo = getTodo();
console.log(todo);

console.log("Hassan");
