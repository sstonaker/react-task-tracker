import PropTypes from "prop-types";

const Header = (props) => {
  return (
    <header>
      <h1 className="header">{props.title}</h1>
      <button className="btn">Add</button>
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

const headingStyle = {
  color: "red",
  backgroundColor: "black",
};
export default Header;
