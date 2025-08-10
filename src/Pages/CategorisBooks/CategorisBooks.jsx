import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import CategoryBookCard from "./CategoryBookCard";
import { Helmet } from "react-helmet";
import Loader from "../../Components/Loader";
import axios from "axios";

const CategorisBooks = () => {

  const location = useLocation();
  const categoryName = location.pathname.split('/')[2];

  const [categoryBooks, setCategoryBooks] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    axios(`http://localhost:5000/categories/${categoryName}`)
      .then((res) => {
        setCategoryBooks(res.data)
        setLoader(false)
      })
      .catch((err) => console.log(err));
  }, [categoryName]);

  if(loader){
    return <Loader></Loader>
  }

  return (
    <div className="mb-10 mx-2">
      <Helmet>
        <title>PageFlow || Category {categoryName}</title>
      </Helmet>
      <h1 className="md:text-3xl text-xl font-bold text-center mt-3 mb-8">
        Category Name : {categoryName}
      </h1>
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {categoryBooks.map((categoryBook, index) => (
          <CategoryBookCard categoryBook={categoryBook} key={index} />
        ))}
      </div>
    </div>
  );
};

export default CategorisBooks;
