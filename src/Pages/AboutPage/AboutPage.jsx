import React from "react";

const AboutPage = () => {
  return (
    <div className=" min-h-screen">
      <div className="max-w-3xl mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-bold text-primary mb-6">
          About Our Library
        </h1>

        <p className=" mb-6">
          Welcome to{" "}
          <span className="font-semibold ">Page Flow</span> — a
          peaceful space where books, ideas, and people come together. We are
          dedicated to providing free access to knowledge, fostering a love for
          reading, and serving as a welcoming hub for our community.
        </p>

        <img
          src="https://images.unsplash.com/photo-1485322551133-3a4c27a9d925?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Cozy reading corner"
          className="rounded-lg shadow-md mb-6 w-full object-cover"
          loading="lazy"
        />

        <p className="">
        Explore our extensive collection of ebooks and digital resources, tailored for students, researchers, and book lovers alike. With user-friendly features and personalized recommendations, your next read is just a click away.  
        Join our community and unlock the power of knowledge with ease.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
