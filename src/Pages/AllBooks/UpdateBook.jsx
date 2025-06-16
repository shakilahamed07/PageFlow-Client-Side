import React, { use, useState } from "react";
import { useLoaderData, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../../Context/AuthProvider";
import axios from "axios";

const UpdateBook = () => {

    const bookSingle = useLoaderData();
    const { name, image, shortDescription, authorName, category, rating, bookContent, quantity } = bookSingle;
    const {user} = use(AuthContext);
    const navigate =useNavigate()
    const [ratingE, setRatingE] = useState('');

    const handleUpdate = (e) =>{
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const {rating, quantity, ...rest} =  Object.fromEntries(formData.entries())
        if(rating>5){
          return setRatingE("!Rating (1-5)")
        }
        setRatingE('')
        const convertQuantity = parseInt(quantity);
        const updateBook = {
          email: user.email,
          ...rest,
          rating,
          quantity: convertQuantity
        }
        // console.log(newBook)
        
        //* Update database
        axios.put(`http://localhost:5000/book-update/${bookSingle._id}`, updateBook)
        .then(data=>{
              if(data.data.modifiedCount){
                  Swal.fire({
                      title: "Successfully Update Book!",
                      icon: "success",
                      draggable: true,
                      timer: 1500
                    });
                    navigate(-1)
              }
          })
        .catch(err=> console.log(err))
    }


  return (
    <div className="shadow-xl md:px-8 rounded-2xl md:mx-5 mx-2 px-2 my-2 pt-2 mb-10">
      <div className="mx-3">
        <h1 className="text-3xl font-bold text-center mb-3 mt-10 ">
          Update Book
        </h1>

        <form onSubmit={handleUpdate}>
          <div className="grid sm:grid-cols-2 sm:gap-x-10 md:gap-x-20">
            {/*Name*/}
            <fieldset className="fieldset max-w-2xl rounded-box  py-5">
              <label className="text-xl mb-1">Book Name</label>
              <input
                type="text"
                name="name"
                defaultValue={name}
                className="input w-full   rounded-2xl border-primary focus:outline-none"
                placeholder="Book name"
                required
              />
            </fieldset>
            {/*Image url*/}
            <fieldset className="fieldset  max-w-2xl  rounded-box  py-5">
              <label className="text-xl mb-1">Image URL</label>
              <input
                type="text"
                name="image"
                defaultValue={image}
                className="input w-full   rounded-2xl border-primary focus:outline-none"
                placeholder="Image URL"
                required
              />
            </fieldset>
            {/*Category*/}
            <fieldset className="fieldset rounded-box py-5 max-w-2xl ">
              <label className="text-xl mb-1">Category</label>
              <select
                name="category"
                className="input w-full  rounded-2xl border-primary focus:outline-none"
                defaultValue={category}
              >
                <option value="">--Select one--</option>
                <option value="Science">Science</option>
                <option value="History">History</option>
                <option value="Fiction">Fiction</option>
                <option value="Non-Fiction">Non-Fiction</option>
              </select>
            </fieldset>
            {/*authorName*/}
            <fieldset className="fieldset rounded-box  py-5 max-w-2xl ">
              <label className="text-xl mb-1">Author Name</label>
              <input
                type="text"
                name="authorName"
                className="input w-full rounded-2xl border-primary focus:outline-none"
                placeholder="Author Name"
                defaultValue={authorName}
                required
              />
            </fieldset>
            {/*quantity*/}
            <fieldset className="fieldset rounded-box  py-5 max-w-2xl ">
              <label className="text-xl mb-1">Quantity</label>
              <input
                type="number"
                name="quantity"
                defaultValue={quantity}
                className="input w-full rounded-2xl border-primary focus:outline-none"
                placeholder="Type quantity"
                required
              />
            </fieldset>
            {/*rating*/}
            <fieldset className="fieldset rounded-box  py-5 max-w-2xl ">
              <label className="text-xl mb-1">Rating</label>
              <input
                type="float"
                name="rating"
                defaultValue={rating}
                className="input w-full rounded-2xl border-primary focus:outline-none"
                placeholder="1 - 5 rating"
                required
              />
              {ratingE? <p className="text-red-600">{ratingE}</p>: ''}
            </fieldset>
            {/*shortDescription*/}
            <fieldset className="fieldset rounded-box  py-5 max-w-2xl ">
              <label className="text-xl mb-1">Short Description</label>
              <textarea
                type="text"
                name="shortDescription"
                defaultValue={shortDescription}
                className="input w-full rounded-2xl border-primary focus:outline-none textarea resize-none"
                placeholder="Description"
                required
              />
            </fieldset>
            {/*bookContent*/}
            <fieldset className="fieldset rounded-box  py-5 max-w-2xl ">
              <label className="text-xl mb-1">Book Content</label>
              <textarea
                type="text"
                name="bookContent"
                defaultValue={bookContent}
                className="input w-full resize-none rounded-2xl border-primary focus:outline-none textarea"
                placeholder="Book Content"
                required
              />
            </fieldset>
          </div>
          <div className="text-center mt-9">
            <button
              type="submit"
              className="border  border-primary text-white bg-primary font-bold rounded-full hover:bg-secondary py-2 md:px-50 px-25 mb-10"
            >
              Update Book
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateBook;
