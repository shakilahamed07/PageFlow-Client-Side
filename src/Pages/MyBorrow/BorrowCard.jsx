import React from "react";

const BorrowCard = ({ book, handleRetuneBook }) => {
  const { id,_id, name, image, category, retuneDate, borrowDate } = book;

  return (
    <div className="card bg-base-100 w-82 mx-auto shadow-md border border-gray-200 rounded-2xl">
      <figure>
        <img className="pt-3" src={image} alt="Book img" />
      </figure>
      <div className="card-body">
        <h2 className="text-xl font-bold mb-1">{name}</h2>

        <div className="card-actions">
          <div className="badge badge-outline bg-base-200 border-none font-medium ">
            Category: {category}
          </div>
        </div>
        <p className="mt-2">Borrow Date: {borrowDate}</p>
        <p className="mb-2">Retune Date: {retuneDate}</p>
        <div className="card-actions">
          <button
            onClick={() => handleRetuneBook(_id, id)}
            className="btn w-69 mx-auto btn-primary rounded-3xl border-none"
          >
            Retune Book
          </button>
        </div>
      </div>
    </div>
  );
};

export default BorrowCard;
