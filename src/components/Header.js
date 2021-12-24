import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header className="flex justify-between items-center mb-5">
      <h1 className="text-4xl font-semibold">{title}</h1>
      <Button text={showAdd ? "Close" : "Add"} handleClick={onAdd} />
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
