import React, { use, useEffect, useState } from "react";
import BorrowCard from "./BorrowCard";
import axios from "axios";
import { AuthContext } from "../../Context/AuthProvider";
import Swal from "sweetalert2";

const MyBorrow = () => {
    const {user} = use(AuthContext);
    const [myBorrow, setMyBorrow] = useState([]);
    useEffect(()=>{
        axios(`http://localhost:5000/borrow/${user.email}`)
        .then(res=>  setMyBorrow(res.data))
        .catch(err=> console.log(err))
    },[])

    const handleRetuneBook = (id) => {
        //* retune
        console.log(id)
        axios.delete(`http://localhost:5000/borrow/${id}`)
          .then((res) => {
            if(res.data.deletedCount){
                Swal.fire({
                    title: "Book retune Successfully!",
                    icon: "success",
                    draggable: true,
                    timer: 1000
                  });
                  
                  const reamingBorrow = myBorrow.filter(borrow => borrow.id !== id)
                  setMyBorrow(reamingBorrow)
            }
          })
          .catch((error) => console.log(error));
      };

  return (
    <div className="mb-10 mx-2">
      <h1 className="md:text-3xl text-xl font-bold text-center mt-3 mb-8">
        My Borrow
      </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 lg:max-w-6xl md:max-w-2xl mx-auto mt-8">
        {myBorrow.map((book) => (
          <BorrowCard book={book} handleRetuneBook={handleRetuneBook} key={book._id}/>
        ))}
      </div>
    </div>
  );
};

export default MyBorrow;
