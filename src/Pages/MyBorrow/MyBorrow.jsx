import React, { use, useEffect, useState } from "react";
import BorrowCard from "./BorrowCard";
import axios from "axios";
import { AuthContext } from "../../Context/AuthProvider";
import Swal from "sweetalert2";
import { img } from "motion/react-client";

const MyBorrow = () => {
  const { user } = use(AuthContext);
  const [myBorrow, setMyBorrow] = useState([]);
  useEffect(() => {
    axios(`http://localhost:5000/borrow/${user.email}`)
      .then((res) => setMyBorrow(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleRetuneBook = (id) => {
    //* retune
    axios
      .delete(`http://localhost:5000/borrow/${id}`)
      .then((res) => {
        if (res.data.deletedCount) {
          Swal.fire({
            title: "Book retune Successfully!",
            icon: "success",
            draggable: true,
            timer: 1000,
          });

          const reamingBorrow = myBorrow.filter((borrow) => borrow.id !== id);
          setMyBorrow(reamingBorrow);
        }
      })
      .catch((error) => console.log(error));

    const email = {
      email: user.email,
    };
    axios
      .patch(`http://localhost:5000/borrow/${id}`, email)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <div className="mb-10 mx-2">
      {myBorrow.length < 1 ? (
        <div className="mt-10">
          <img
            className="max-w-2xs mx-auto"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi5P6Q_fdVlVztoz8DIiqVesAnefc3CMwsVA&s"
          ></img>
          <h1 className="text-center text-3xl font-bold">Not Found!</h1>
        </div>
      ) : (
        <>
          <h1 className="md:text-3xl text-xl font-bold text-center mt-3 mb-8">
            My Borrow
          </h1>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 lg:max-w-6xl md:max-w-2xl mx-auto mt-8">
            {myBorrow.map((book) => (
              <BorrowCard
                book={book}
                handleRetuneBook={handleRetuneBook}
                key={book._id}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default MyBorrow;
