import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router";
const CategoryBookCard = ({ categoryBook }) => {
  const {_id, image, authorName, shortDescription} = categoryBook;

  return (
    <div className="card bg-base-100 w-77 shadow-sm mx-2">
      <figure className="px-10 pt-10">
        <img
          src={image}
          alt="Shoes"
          className="rounded-xl border h-60 border-gray-50"
        />
      </figure>
      <div className="card-body px-5">
        <h2 className="card-title ">{categoryBook.name.slice(0, 29)}</h2>
        <p className="font-medium">{authorName}</p>
        <p className="mb-3">{shortDescription}</p>
        <div className="card-actions">
          <Link
            to={`/book-details/${_id}`}
            className="btn w-full mx-auto btn-primary border-none"
          >
            Details Book
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryBookCard;
