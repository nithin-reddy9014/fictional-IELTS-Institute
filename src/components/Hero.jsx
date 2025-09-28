import React from "react";
//import heroImage from "../assets/hero-image.jpg"; // add your own image

const Hero = () => {
  return (
    <section className="bg-gray-50 pt-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center p-6">
        <div className="flex-1 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            Achieve Your Dream IELTS Band
          </h1>
          <p className="text-gray-600">
            Join our expert-led training to boost your speaking, listening,
            reading, and writing scores.
          </p>
          <button className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Get Started
          </button>
        </div>
        <div className="flex-1 mt-6 md:mt-0">
          <img
            src={
              "https://leapscholar.com/_next/image?url=https%3A%2F%2Fd14lg9nzq1d3lc.cloudfront.net%2Fscholarfrontend%2Fassets%2Fabout_us_revamp%2FAboutUsHeroMap.png&w=1200&q=75"
            }
            alt="IELTS Training"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
