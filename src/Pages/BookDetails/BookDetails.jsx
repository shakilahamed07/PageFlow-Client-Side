import React, { use, useEffect, useState} from "react";
import { FaStar } from "react-icons/fa";
import { useNavigate, useParams } from "react-router";
import { AuthContext } from "../../Context/AuthProvider";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import { Helmet } from "react-helmet";

const BookDetails = () => {
  const { user } = use(AuthContext);
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const [bookDetails, setbookDetails] = useState([]);
  const {id} = useParams()

  useEffect(() => {
    axiosSecure(`/books/${id}`)
      .then((res) => setbookDetails(res.data))
      .catch((err) => console.log(err));
  }, []);

  const {
    _id,
    name,
    image,
    authorName,
    rating,
    quantity,
    category,
    bookContent,
    borrowList
  } = bookDetails;

  const handleBorrow = () => {
    document.getElementById("my_modal_3").showModal();
  };

  const handleBorrowModal = (e) => {
    e.preventDefault();
    const displayName = e.target.name.value;
    const email = e.target.email.value;
    const retuneDate = e.target.retuneDate.value;

    const today = new Date();
    const day = String(today.getDate()).padStart(2, "0");
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const year = today.getFullYear();
    const date = `${year}/${month}/${day}`;

    const borrowData = {
      id: _id,
      email,
      displayName,
      image,
      name,
      category,
      quantity,
      retuneDate,
      borrowDate: date,
      borrowList,
    };

    //* Save Database
    axiosSecure.post(`http://localhost:5000/add-borrow/${_id}`, borrowData)
    .then(res => {
      if(res.data.insertedId){
        Swal.fire({
          title: "Successfully Borrow Book!",
          icon: "success",
          draggable: true,
          timer: 1500
        });
        navigate('/my-borrow')
      }
    })
    .catch(error => {
      console.log(error)
        Swal.fire({
          title: "Already Add Borrow!",
          icon: "error",
          draggable: true,
          timer: 2000
        });
        navigate('/my-borrow')
    })
  };

  useEffect(()=>{
      if(quantity < 1){
        document.getElementById('borrowBtn').setAttribute('disabled', true)
      }
  },[quantity])

  return (
    <>
    <Helmet>
        <title>PageFlow || Book Details</title>
      </Helmet>
      <div className="md:flex justify-center items-center gap-10 md:py-20 pt-5 pb-10 rounded-3xl space-y-10 md:space-y-0 shadow-xl mb-10 mx-2">
        <div className="bg-base-300 md:px-18 md:py-20 py-5 rounded-2xl flex justify-center mx-8">
          <img className="rounded-xl " src={image} alt="Book img" />
        </div>

        {/* Book details */}
        <div className="md:px-5 px-5">
          <p className="md:mb-3">{authorName}</p>
          <h1 className="sm:text-5xl text-3xl font-bold max-w-150 leading-15">
            {name}
          </h1>
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
          <button
            onClick={handleBorrow}
            id="borrowBtn"
            className="btn btn-primary border-none rounded-xl"
          >
            Borrow
          </button>
        </div>
      </div>

      {/* Modal */}
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box max-w-96">
          {/* close modal */}
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>

          <form onSubmit={handleBorrowModal} className="fieldset">
            <h1 className="text-center font-bold text-2xl mb-2">Borrow Now</h1>
            {/* //*Name */}
            <label>Your Name</label>
            <input
              type="name"
              name="name"
              defaultValue={user.displayName}
              className="input focus:outline-none rounded-3xl focus:border-primary w-full"
              placeholder="Name"
              required
            />
            {/* //*Email */}
            <label>Your Email</label>
            <input
              type="email"
              name="email"
              defaultValue={user.email}
              className="input focus:outline-none rounded-3xl focus:border-primary w-full"
              placeholder="Email"
              required
            />
            {/* //* Retune Date */}
            <label>Retune Date</label>
            <input
              type="date"
              name="retuneDate"
              className="input focus:outline-none rounded-3xl focus:border-primary w-full"
              required
            />
            <button className="btn border-none rounded-3xl bg-primary text-white font-bold mt-4">
              Submit
            </button>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default BookDetails;
