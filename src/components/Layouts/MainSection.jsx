import ProfileSection from "../Fragments/ProfileSection";
import Image from "../Elements/Image";

const MainSection = () => {
  return (
    <section className="flex justify-center items-center p-8 gap-x-96">
      <ProfileSection />
      <Image src="images/myLogo.png" alt="Profile" />
    </section>
  );
};

export default MainSection;
