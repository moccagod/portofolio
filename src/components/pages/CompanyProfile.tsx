import Navbar from "../organisms/Navbar";

const CompanyProfile = () => {
  return (
    <div>
      <Navbar
        links={[
          { label: "Home", href: "/" },
          { label: "Portofolio", href: "/portofolio" },
          { label: "Services", href: "/services" },
        ]}
      />
      <h1 className="text-center">Company Profile Page</h1>
    </div>
  );
};

export default CompanyProfile;
