import React, { useEffect, useState } from "react";
import CardUpdate from "../AddBook/CardUpdate";
import { MdGridView } from "react-icons/md";
import TableView from "../AddBook/TableView";
import Loader from "../../Components/Loader";
import { Helmet } from "react-helmet";
import axios from "axios";

const AllBooks = () => {
  const [allBooks, setAllBooks] = useState([]);
  const [viewType, setViewType] = useState("card");
  const [loader, setLoader] = useState(true);
  const [selectedOption, setSelectedOption] = useState(null);
  
  console.log(selectedOption)

  useEffect(() => {
    axios(`http://localhost:5000/books?filter=${selectedOption}`)
      .then((res) => {
        setAllBooks(res.data);
        setLoader(false);
      })
      .catch((err) => console.log(err));
  }, [selectedOption]);

  if (loader) {
    return <Loader></Loader>;
  }

  const handleView = (e) => {
    const view = e.target.value;
    setViewType(view);
  };
  const ratingFilter = (e) => {
    const view = e.target.value;
    setSelectedOption(view);
  };

  return (
    <div className="max-w-[1350px] mx-auto">
      <Helmet>
        <title>PageFlow || All Book</title>
      </Helmet>
      <div className="sm:flex items-center justify-between max-w-[1350px] mx-auto mb-3 px-3">
      <div className="">
          <fieldset className="fieldset flex items-start rounded-box py-5 max-w-2xl ">
            <label className="text-xl mb-1 font-medium flex items-center gap-1">
              Filter By Rating : 
            </label>
            <select
              name="category"
              className="input w-30  rounded-md border-primary focus:outline-none cursor-pointer"
              onChange={ratingFilter}
            >
              <option >Select..</option>
              <option value={-1}>High rating fast</option>
              <option value={1}>Low rating fast</option>
              <option value={0}>No Filter</option>
            </select>
          </fieldset>
        </div>
        <div className="">
          <fieldset className="fieldset flex items-start rounded-box py-5 max-w-2xl ">
            <label className="text-2xl mb-1 font-bold flex items-center gap-1">
              <MdGridView />
              View :
            </label>
            <select
              name="category"
              className="input w-30  rounded-2xl border-primary focus:outline-none cursor-pointer"
              onChange={handleView}
            >
              <option value="card">Card view</option>
              <option value="table">Table View</option>
            </select>
          </fieldset>
        </div>
      </div>

      <div className="">
        {viewType === "card" ? (
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {allBooks.map((book) => (
              <CardUpdate book={book} key={book._id} />
            ))}
          </div>
        ) : (
          <div className="mb-10 ">
            {allBooks.map((book) => (
              <TableView book={book} key={book._id} viewType={viewType} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AllBooks;
