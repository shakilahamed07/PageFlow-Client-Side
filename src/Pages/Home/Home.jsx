import React from "react";
import Hero from "./Hero";
import BooksCategary from "./BooksCategary";

const Home = () => {
  return (
    <div className="max-w-[1350px] mx-auto">
      <Hero />
      <section>
        <h1 className="text-3xl font-bold text-center mt-15 mb-8">Book Category</h1>
        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          <BooksCategary name={"Science"} dis={"Science & Technology"} img={'https://cdn-icons-png.flaticon.com/512/5205/5205074.png'} />
          <BooksCategary name={"History"} dis={"World History"} img={'https://cdn-icons-png.freepik.com/256/1991/1991939.png?ga=GA1.1.751526860.1746424154&semt=ais_hybrid'} />
          <BooksCategary name={"Fiction"} dis={"Fiction History"} img={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQSqlDbZzuSuMNLXZRgcAw9QlfMtp765oE4A&s'} />
          <BooksCategary name={"Non-Fiction"} dis={"Non-Fictional books"} img={'https://cdn-icons-png.freepik.com/256/2275/2275481.png?ga=GA1.1.751526860.1746424154&semt=ais_hybrid'} />
        </div>
      </section>


    </div>
  );
};

export default Home;
