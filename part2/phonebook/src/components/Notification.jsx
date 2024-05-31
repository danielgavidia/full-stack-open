import propTypes from "prop-types";

const Notification = ({ person }) => {
  const styling = {
    color: "green",
    fontSize: 16,
    background: "lightgrey",
    borderStyle: "solid",
    borderRadius: 5,
  };
  if (person === null) {
    return null;
  }
  return <div style={styling}>Added {person}</div>;
};

Notification.propTypes = {
  person: propTypes.string.isRequired,
};

export default Notification;
