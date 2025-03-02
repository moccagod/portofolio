import Copyright from "../atoms/Copyright";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6 mt-4">
      <div className="container flex flex-col items-center justify-center">
        <Copyright />
      </div>
    </footer>
  );
};

export default Footer;
