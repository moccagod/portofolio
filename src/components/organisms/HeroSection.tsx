import ProfileInfo from "../molecules/ProfileInfo";

const HeroSection = () => {
  return (
    <section className="flex items-center justify-center py-20 bg-white px-10">
      <div className="max-w-5xl flex flex-col md:flex-row items-center gap-36">
        {/* Kiri - Text */}
        <ProfileInfo />

        {/* Kanan - Gambar */}
        <div className="flex-1 relative">
          <img
            src="/images/azmi.png"
            alt="Profile"
            className="w-full max-w-md rounded-xl hidden sm:inline"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
