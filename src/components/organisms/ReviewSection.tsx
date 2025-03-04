import React from "react";
import ReviewCard from "../molecules/ReviewCard";

const reviews = [
  {
    image: "/portofolio//images/woman.jpg",
    name: "Reeha Poja Sri Sutadi",
    role: "Student",
    review:
      "Mr. Azmi help me throughout my machine learning and deep learning struggle. i can pass my semester with excellent GPA",
  },
  {
    image: "/portofolio//images/man.jpg",
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
        Read what <br className="md:hidden" /> our customers say
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
