import React from "react";
import { GrUpdate } from "react-icons/gr";
import { Link } from "react-router";

const CardUpdate = ({ book }) => {
  const { image, shortDescription, authorName } = book;
  return (
    <div className="card bg-base-100 w-77 shadow-sm mx-2 hover:scale-98 hover:transition-all">
      <figure className="px-10 pt-10">
        <img
          src={image}
          alt="Shoes"
          className="rounded-xl h-60 border border-gray-50"
        />
      </figure>
      <div className="card-body px-5">
        <h2 className="card-title ">{book.name.slice(0, 29)}</h2>
        <p className="font-medium">{authorName}</p>
        <p className="mb-3">{shortDescription}</p>
        <div className="card-actions">
          <Link
            to={`/book-details/${book._id}`}
            className="btn w-full mx-auto btn-primary border-none"
          >
            Details Book
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardUpdate;
