import React from "react";
import { FaStar } from "react-icons/fa";
import { useLoaderData } from "react-router";

const BookDetails = () => {
  const bookDetails = useLoaderData();
  const {
    name,
    image,
    authorName,
    rating,
    quantity,
    category,
    bookContent
  } = bookDetails;

  const handleBorrow = ()=>{
    console.log('Borrow')
  }

  return (
    <div className="md:flex justify-center items-center gap-10 md:py-20 pt-5 pb-10 rounded-3xl space-y-10 md:space-y-0 shadow-xl mb-10 mx-2">
      <div className="bg-base-300 md:px-18 md:py-20 py-5 rounded-2xl flex justify-center mx-8">
        <img className="rounded-xl " src={image} alt="Book img" />
      </div>

      {/* Book details */}
      <div className="md:px-5 px-5">
        <p className="md:mb-3">{authorName}</p>
        <h1 className="sm:text-5xl text-3xl font-bold max-w-150 leading-15">{name}</h1>
        <div className="card-actions my-8">
          <div className="sm:text-xl py-2 px-4 rounded-3xl bg-base-200 border-none font-medium">
            Category: {category}
          </div>
          <div className="bg-base-200 border-none font-medium sm:text-xl py-2 px-4 rounded-3xl">
            Quantity: {quantity}
          </div>
        </div>
        <p className="max-w-110 mb-5">{bookContent}</p>
        <h1 className="font-medium my-1 flex gap-2 items-center bg-base-300 rounded-2xl w-fit py-2 px-4 mb-6">
          Rating: <FaStar color="#fcba03" />
          {rating}+
        </h1>
        <button onClick={handleBorrow} className="btn btn-primary border-none rounded-xl">
          Borrow
        </button>
      </div>
    </div>
  );
};

export default BookDetails;
