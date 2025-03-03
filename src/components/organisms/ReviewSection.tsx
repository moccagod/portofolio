import React from "react";
import ReviewCard from "../molecules/ReviewCard";

const reviews = [
  {
    image: "/images/woman.jpg",
    name: "Celia Almeda",
    role: "CEO Company",
    review:
      "Proin sed libero enim sed faucibus turpis. At imperdiet dui accumsan sit amet nulla facilisi.",
  },
  {
    image: "/images/man.jpg",
    name: "Frank Kinney",
    role: "Financial Director",
    review:
      "Ut sem nulla pharetra diam sit amet nisl. Quis vel eros donec ac odio tempor orci dapibus.",
  },
];

const ReviewSection: React.FC = () => {
  return (
    <div className="py-10 bg-gray-800 text-gray-900 text-center">
      <h2 className="text-3xl font-bold text-white mb-6">
        Read what our customers say
      </h2>
      <div className="flex flex-wrap justify-center gap-6 px-4 max-w-screen-lg mx-auto">
        {reviews.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </div>
    </div>
  );
};

export default ReviewSection;
