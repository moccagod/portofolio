const Button = () => {
  const scrollToAboutMe = () => {
    const aboutMeSection = document.getElementById("aboutme");
    if (aboutMeSection) {
      aboutMeSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button
      onClick={scrollToAboutMe}
      className="bg-gray-800 hover:bg-gray-700 duration-300 text-white px-6 py-2 rounded-full font-semibold cursor-pointer"
    >
      About Me!
    </button>
  );
};

export default Button;
