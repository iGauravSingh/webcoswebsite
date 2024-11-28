import React from "react";

const Faq = () => {
  return (
    <section className="relative py-16 bg-white min-w-full animation-fade animation-delay">
      <div className="container px-0 mx-auto sm:px-5">
        <p className="mx-6 text-xs font-bold text-left text-pink-500 uppercase sm:text-center sm:text-normal sm:font-bold">
          Got a Question? We’ve got answers.
        </p>
        <h3 className="mx-6 mt-1 text-xl font-bold text-left text-gray-800 sm:text-3xl md:text-5xl sm:text-center sm:mx-0">
          Frequently Asked Questions
        </h3>

        <div className="w-full px-6 py-6 mx-auto mt-10 bg-white border border-gray-200 sm:px-8 md:px-12 sm:py-8 sm:rounded-lg sm:shadow md:w-2/3">
          <h3 className="text-lg font-bold text-purple-500 sm:text-xl md:text-2xl">
            How does it work?
          </h3>
          <p className="mt-2 text-base text-gray-600 sm:text-lg md:text-normal">
            Our platform works with your Idea to create your app that is most
            economical as well best performance.
          </p>
        </div>

        <div className="w-full px-6 py-6 mx-auto mt-10 bg-white border border-gray-200 sm:px-8 md:px-12 sm:py-8 sm:rounded-lg sm:shadow md:w-2/3">
          <h3 className="text-lg font-bold text-purple-500 sm:text-xl md:text-2xl">
            Do we offer training?
          </h3>
          <p className="mt-2 text-base text-gray-600 sm:text-lg md:text-normal">
            We offer best training in market and make our student work on live
            projects.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Faq;
