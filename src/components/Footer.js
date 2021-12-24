import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mt-8 text-center">
      <p>Copyright &copy; 2021</p>
      <Link to="/about">About</Link>
    </footer>
  );
};

export default Footer;
