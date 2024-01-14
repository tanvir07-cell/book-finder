import React, { useState } from "react";
import BookSearchParams from "./BookSearchParams";
import BookList from "./BookList";
const BOOKS = [
  {
    id: crypto.randomUUID(),
    title: "JavaScript and Jquery(2005)",
    writter: "Jon Duckett",
    img: "https://javascriptbook.com/images/book/javascript-and-jquery-book-cover.png",
    stars: [
      // for unique key
      crypto.randomUUID(),
      crypto.randomUUID(),
      crypto.randomUUID(),
      crypto.randomUUID(),
    ],
    price: 62,
    isFavourite: false,
  },

  {
    id: crypto.randomUUID(),
    title: "Eloquent JavaScript(2007)",
    writter: "Marijn Haverbeke",
    img: "https://eloquentjavascript.net/img/cover.jpg",
    stars: [
      // for unique key
      crypto.randomUUID(),
      crypto.randomUUID(),
      crypto.randomUUID(),
      crypto.randomUUID(),
    ],
    price: 72,
    isFavourite: false,
  },

  {
    id: crypto.randomUUID(),
    title: "You Don't Know JS(2009)",
    writter: "Kyle Simpson(getify)",
    img: "https://m.media-amazon.com/images/I/71mKvD89oEL._AC_UF1000,1000_QL80_.jpg",
    stars: [
      // for unique key
      crypto.randomUUID(),
      crypto.randomUUID(),
      crypto.randomUUID(),
      crypto.randomUUID(),
      crypto.randomUUID(),
    ],
    price: 92,
    isFavourite: true,
  },
  {
    id: crypto.randomUUID(),
    title: "JavaScript the Definitive Guide(2011)",
    writter: "David Flanagan",
    img: "https://5.imimg.com/data5/SELLER/Default/2023/11/363422448/XQ/UO/OX/121408955/javascript-the-definitive-guide-master-the-world-s-most-used-programming-language-paperback-book-500x500.jpg",
    stars: [
      // for unique key
      crypto.randomUUID(),
      crypto.randomUUID(),
      crypto.randomUUID(),
      crypto.randomUUID(),
    ],
    price: 68,
    isFavourite: false,
  },
  {
    id: crypto.randomUUID(),
    title: "Grooking Algorithms(2013)",
    writter: "Aditya Y. Bhargava",
    img: "https://static1.eboighar.com/thumbimages/Books/book_15242022-01-31_1643614013.png",
    stars: [
      // for unique key

      crypto.randomUUID(),
      crypto.randomUUID(),
      crypto.randomUUID(),
    ],
    price: 92,
    isFavourite: true,
  },

  {
    id: crypto.randomUUID(),
    title: "Rich Dad Poor Dad(2015)",
    writter: "Robert T. Kiyosaki",
    img: "https://static-01.daraz.com.bd/p/dd277e5b08f2b1d0d3e4e8677862b7d6.jpg",
    stars: [
      // for unique key
      crypto.randomUUID(),
      crypto.randomUUID(),
      crypto.randomUUID(),
      crypto.randomUUID(),
      crypto.randomUUID(),
    ],
    price: 92,
    isFavourite: true,
  },
];

const BookSection = () => {
  const [books, setBooks] = useState(BOOKS);
  const handleSearchBook = (searchBooks) => {
    const newBooks = books.filter((book) => {
      return book.title.toLowerCase().includes(searchBooks.toLowerCase());
    });
    // if input field is empty then show all books
    searchBooks ? setBooks(newBooks) : setBooks(BOOKS);
  };

  function handleToogleFavourite(id) {
    const newBooks = books.map((book) => {
      if (book.id === id) {
        book.isFavourite = !book.isFavourite;
      }
      return book;
    });
    setBooks(newBooks);
  }

  function handleSortBook(val) {
    const newBooks = [...books];
    if (val === "name_asc") {
      newBooks.sort((a, b) => a.title.localeCompare(b.title));
    }
    if (val === "name_desc") {
      newBooks.sort((a, b) => b.title.localeCompare(a.title));
    }
    if (val === "year_asc") {
      newBooks.sort((a, b) => a.title.match(/\d+/g) - b.title.match(/\d+/g));
    }
    if (val === "year_desc") {
      newBooks.sort((a, b) => b.title.match(/\d+/g) - a.title.match(/\d+/g));
    }
    setBooks(newBooks);
  }

  return (
    <main className="my-10 lg:my-14">
      <BookSearchParams
        books={books}
        onHandleBookSearch={handleSearchBook}
        onHandleBookSort={handleSortBook}
      />
      <BookList books={books} onFavourite={handleToogleFavourite} />
    </main>
  );
};

export default BookSection;
