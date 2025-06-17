import React from "react";
import { useLoaderData, useLocation } from "react-router";
import CategoryBookCard from "./CategoryBookCard";
import { Helmet } from "react-helmet";

const CategorisBooks = () => {
  const categoryBooks = useLoaderData();
  const location = useLocation();
  const categoryName = location.pathname.split('/')[2];

  return (
    <div className="mb-10 mx-2">
      <Helmet>
        <title>PageFlow || Category {categoryName}</title>
      </Helmet>
      <h1 className="md:text-3xl text-xl font-bold text-center mt-3 mb-8">
        Category Name : {categoryName}
      </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 lg:max-w-6xl md:max-w-2xl mx-auto mt-8">
        {categoryBooks.map((categoryBook, index) => (
          <CategoryBookCard categoryBook={categoryBook} key={index} />
        ))}
      </div>
    </div>
  );
};

export default CategorisBooks;
