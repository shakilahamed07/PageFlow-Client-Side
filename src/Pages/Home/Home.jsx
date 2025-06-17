import React from "react";
import Hero from "./Hero";
import BooksCategary from "./BooksCategary";
import { useLoaderData } from "react-router";
import { Helmet } from "react-helmet";
import FaqSection from "./FaqSection"
import Sponsor from "./Sponsor";

const Home = () => {
  const categorys = useLoaderData();
  return (
    <div className="max-w-[1350px] mx-auto">
      <Helmet>
        <title>PageFlow || Home</title>
      </Helmet>

      <Hero />
      <section>
        <h1 className="text-3xl font-bold text-center mt-15 mb-8">Book Category</h1>
        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {
            categorys.map((category, index) => <BooksCategary category={category} key={index} />)
          }
        </div>
      </section>

      <section>
        <h1 className="text-3xl font-bold text-center mt-15">FAQ Section</h1>
        <FaqSection/>
      </section>

      <section>
        <h1 className="text-3xl font-bold text-center mt-15 mb-5">Our Sponsor</h1>
        <Sponsor/>
      </section>


    </div>
  );
};

export default Home;
