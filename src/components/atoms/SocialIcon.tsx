import { ReactNode } from "react";

const SocialIcon = ({ children }: { children: ReactNode }) => {
  return (
    <div className="text-white text-2xl hover:text-gray-400 cursor-pointer">
      {children}
    </div>
  );
};

export default SocialIcon;
