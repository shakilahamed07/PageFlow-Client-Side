import React, {useEffect, useState } from "react";
import CardUpdate from "../AddBook/CardUpdate";
import { BiSolidShow } from "react-icons/bi";
import { MdGridView } from "react-icons/md";
import TableView from "../AddBook/TableView";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import Loader from "../../Components/Loader";

const AllBooks = () => {
  const axiosSecure = useAxiosSecure();
  const [allBooks, setAllBooks] = useState([]);
  const [viewType, setViewType] = useState("card");
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    axiosSecure(`/books`)
      .then((res) => {
        setAllBooks(res.data)
        setLoader(false)}
      )
      .catch((err) => console.log(err));
  }, []);

  if(loader){
    return <Loader></Loader>
  }
  

  const handleQuantity = () => {
    const available = allBooks.filter((book) => book.quantity > 0);
    setAllBooks(available);
  };

  const handleView = (e) => {
    const view = e.target.value;
    setViewType(view);
  };

  return (
    <div>
      <div className="sm:flex items-center justify-between max-w-6xl mx-auto mb-3 sm:px-10 px-3">
        <button onClick={handleQuantity} className="btn font-bold">
          Show Available Books
        </button>
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
          <div className="flex flex-wrap justify-center gap-8 mb-10">
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
