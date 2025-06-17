import React from "react";

const FaqSection = () => {
  return (
    <div className="">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-6 bg-base-100 p-8 md:p-16 space-y-8 md:space-y-0 mb-10 rounded-2xl mx-2">
        {/* Left - Image and person info */}
        <div className="relative w-full lg:w-1/2">
          <img
            src="https://img.freepik.com/free-vector/curiosity-people-concept-illustration_114360-11034.jpg?ga=GA1.1.751526860.1746424154&semt=ais_hybrid&w=740" // Replace with actual image path
            alt=""
            className="rounded-xl mx-auto"
          />
        </div>

        {/* Right - Case study content */}
        <div className="w-full lg:w-1/2 space-y-6">
          <div className="collapse bg-base-100 border border-base-400">
            <input type="radio" name="my-accordion-1" defaultChecked />
            <div className="collapse-title font-semibold">
            How can I Borrow Book? 
            </div>
            <div className="collapse-content text-sm">
            Click Your favorite category and click any book details page. Then you can go details page and see borrow button. click here borrow button open a modal fill up the from then click submit button. then you can borrow book.
            </div>
          </div>
          <div className="collapse bg-base-100 border border-base-400">
            <input type="radio" name="my-accordion-1" />
            <div className="collapse-title font-semibold">
            Can I return the book?
            </div>
            <div className="collapse-content text-sm">
            Yes.

            </div>
          </div>
          <div className="collapse bg-base-100 border border-base-400">
            <input type="radio" name="my-accordion-1" />
            <div className="collapse-title font-semibold">
            How can I update my book? 
            </div>
            <div className="collapse-content text-sm">
            Go to all book page. Then Find your book. Click the update button. Add update information then submit your form.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
