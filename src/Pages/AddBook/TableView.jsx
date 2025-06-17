import React from "react";
import { GrUpdate } from "react-icons/gr";
import { Link } from "react-router";

const TableView = ({book}) => {
const { name, image, authorName } = book;
  return (
    <div className="flex items-center justify-between md:px-5 px-2 max-w-5xl mx-auto mb-8 border-b pb-5 overflow-x-auto">
      <img className="w-10" src={image} alt="" />
      <div className="ml-2">
        <h2 className="card-title max-w-50">{name}</h2>
        <p className="font-medium">{authorName}</p>
      </div>
      <p className="mb-2 sm:block hidden max-w-40">Category: {book.category}</p>
      <div className="">
        <Link
          to={`/update-book/${book._id}`}
          className="btn mx-auto btn-primary"
        >
          <GrUpdate />
          Update
        </Link>
      </div>
    </div>
  );
};

export default TableView;
