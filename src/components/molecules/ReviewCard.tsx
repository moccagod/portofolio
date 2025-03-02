import React from "react";

interface ReviewCardProps {
  image: string;
  name: string;
  role: string;
  review: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({
  image,
  name,
  role,
  review,
}) => {
  return (
    <div className="bg-white text-white shadow-lg rounded-2xl p-6 flex flex-col items-center text-center max-w-sm transition-transform duration-300 hover:scale-105">
      <p className="text-gray-600 italic mb-4">“{review}”</p>
      <div className="flex items-center space-x-3 mt-4">
        <img src={image} alt={name} className="w-12 h-12 rounded-full" />
        <div className="text-left">
          <p className="font-bold text-gray-900">{name}</p>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
