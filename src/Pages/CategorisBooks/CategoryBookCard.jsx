import React from "react";
import { Link } from "react-router";
const CategoryBookCard = ({ categoryBook }) => {
  const {_id, name, image, authorName, rating, quantity, category } = categoryBook;

  return (
    <div className="card bg-base-100 w-83 mx-auto shadow-sm">
      <figure>
        <img className="pt-3" src={image} alt="Book img" />
      </figure>
      <div className="card-body">
        <h2 className="text-xl font-bold">{name}</h2>
        <p className="font-medium mb-2">Author: {authorName}</p>

        <div className="card-actions">
          <div className="badge badge-outline bg-base-200 border-none font-medium">
            Category: {category}
          </div>
          <div className="badge badge-outline bg-base-200 border-none font-medium">
            Quantity: {quantity}
          </div>
          <h1 className="font-medium my-1">Rating: {rating}+</h1>
        </div>
        <div className="card-actions">
          <Link
            to={`/book-details/${_id}`}
            className="btn w-2xs mx-auto btn-primary"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryBookCard;
