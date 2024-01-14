import React, { Fragment } from "react";
import BookListItems from "./BookListItems";

const BookList = ({ books, onFavourite }) => {
  return (
    <div className="container mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {books.map(({ id, title, writter, img, stars, price, isFavourite }) => (
        <Fragment key={id}>
          <BookListItems
            id={id}
            title={title}
            writter={writter}
            img={img}
            stars={stars}
            price={price}
            isFavourite={isFavourite}
            onFavourite={onFavourite}
          />
        </Fragment>
      ))}
    </div>
  );
};

export default BookList;
