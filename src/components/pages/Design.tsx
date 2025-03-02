import Navbar from "../organisms/Navbar";

const Design = () => {
  return (
    <div>
      <Navbar
        links={[
          { label: "Home", href: "/" },
          { label: "Portofolio", href: "/portofolio" },
          { label: "Services", href: "/services" },
        ]}
      />
      <h1 className="text-center">Design Page</h1>
    </div>
  );
};

export default Design;
