import GetInTouchButton from "../atoms/GetInTouchButton";

const GetInTouch: React.FC = () => {
  return (
    <div className="flex justify-center py-10">
      <div className="bg-white text-black p-10 rounded-2xl shadow-lg w-full max-w-lg text-center">
        <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
        <p className="text-gray-400 mb-6">
          Have a project in mind? Let's talk about it.
        </p>
        <GetInTouchButton />
      </div>
    </div>
  );
};

export default GetInTouch;
