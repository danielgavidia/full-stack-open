import propTypes from "prop-types";

const Notification = ({ person, addedChangedStatus }) => {
  const styling = {
    color: "green",
    fontSize: 16,
    background: "lightgrey",
    borderStyle: "solid",
    borderRadius: 5,
  };
  if (person === null) {
    return null;
  } else if (addedChangedStatus === "added") {
    return <div style={styling}>Added {person}</div>;
  } else if (addedChangedStatus === "changed") {
    return <div style={styling}>Changed {person}</div>;
  }
};

Notification.propTypes = {
  person: propTypes.string.isRequired,
  addedChangedStatus: propTypes.string.isRequired,
};

export default Notification;
