import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import axios from "axios";

const ContactUs = () => {
    const [loader, setLoader] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data)
    try{
        setLoader(true)
        const res = await axios.post('http://localhost:5000/contact', data)
        if(res.data.success){
            toast.success('Sent message successfully')
            reset();
        }
    }
    catch(error){
        toast.error('Message not sent please try again')
        console.log(error)
    }
    finally{
        setLoader(false)
    }
  };

  return (
    <div className="bg-gray-100 rounded-xl py-10">
      <h2 className="text-3xl font-bold text-center">Get in Touch</h2>

      <div className="flex flex-col md:flex-row max-w-6xl mx-auto overflow-hidden">
        {/* Left side - Image & Text */}
        <div className="md:w-1/2 flex flex-col justify-center items-center p-6">
          <img
            src="https://i.ibb.co/Nnxd3pKs/contact-781x675-removebg-preview.png"
            alt="Contact Illustration"
            className="w-52 mb-4"
          />
          <h2 className="text-2xl font-bold mb-2 text-center">Let's Connect!</h2>
          <p className="text-gray-600 text-center max-w-md">
            Have questions or suggestions? Reach out and we’ll get back to you as soon as possible.
          </p>
        </div>

        {/* Right side - Form */}
        <div className="md:w-1/2 p-8">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="flex gap-4">
              <div className="w-1/2">
                <input
                  type="text"
                  placeholder="Enter your name*"
                  className="w-full p-3 bg-white rounded-2xl focus:outline-gray-700"
                  {...register("name", { required: "Name is required" })}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                )}
              </div>

              <div className="w-1/2">
                <input
                  type="text"
                  placeholder="Enter your phone number*"
                  className="w-full p-3 bg-white rounded-2xl focus:outline-gray-700"
                  {...register("phone", { required: "Phone number is required" })}
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                )}
              </div>
            </div>

            <div>
              <input
                type="email"
                placeholder="Enter your email*"
                className="w-full p-3 bg-white rounded-2xl focus:outline-gray-700"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email format",
                  },
                })}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>

            <div>
              <textarea
                rows="4"
                placeholder="Your message*"
                className="w-full p-3 bg-white rounded-2xl focus:outline-gray-700"
                {...register("message", { required: "Message is required" })}
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-white py-3 rounded-xl transition"
            >
              {loader? 'Sending..': 'SEND MESSAGE'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
