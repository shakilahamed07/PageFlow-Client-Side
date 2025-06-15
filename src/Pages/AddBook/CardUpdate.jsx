import React from "react";
import { GrUpdate } from "react-icons/gr";
import { Link } from "react-router";

const CardUpdate = ({ book }) => {
  const { name, image, shortDescription, authorName } = book;
  return (
    <div className="card bg-base-100 w-96 shadow-sm mx-2 border border-gray-50">
      <figure className="px-10 pt-10">
        <img
          src={image}
          alt="Shoes"
          className="rounded-xl border border-gray-50"
        />
      </figure>
      <div className="card-body px-12">
        <h2 className="card-title ">{name}</h2>
        <p className="font-medium">{authorName}</p>
        <p className="mb-3">{shortDescription}</p>
        <div className="card-actions">
          <Link
            to={`/update-book/${book._id}`}
            className="btn w-2xs mx-auto btn-primary"
          >
            <GrUpdate />
            Update Book
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardUpdate;
