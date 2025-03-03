import ButtonHome from "../atoms/ButtonHome";
const ProfileInfo = () => {
  return (
    <div>
      <h2 className="text-4xl font-light text-gray-700">Hello,</h2>
      <h1 className="text-5xl font-bold text-gray-900">
        I Am <span className="text-purple-600">Azmi Nailal Hadi</span>
      </h1>
      <p className="text-lg text-gray-600 mt-2 mb-4">Web Developer</p>
      <ButtonHome />
    </div>
  );
};

export default ProfileInfo;
