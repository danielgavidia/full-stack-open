import propTypes from "prop-types";

const Notification = ({ person, addedChangedStatus, error }) => {
  const stylingNormal = {
    color: "green",
    fontSize: 16,
    background: "lightgrey",
    borderStyle: "solid",
    borderRadius: 5,
  };
  const stylingError = {
    color: "red",
    fontSize: 16,
    background: "lightgrey",
    borderStyle: "solid",
    borderRadius: 5,
  };
  if (person === null) {
    return null;
  } else if (addedChangedStatus === "added") {
    return <div style={stylingNormal}>Added {person}</div>;
  } else if (addedChangedStatus === "changed") {
    return <div style={stylingNormal}>Changed {person}</div>;
  } else if (error === true) {
    return (
      <div style={stylingError}>
        Information of {person} has already been removed from the server
      </div>
    );
  }
};

Notification.propTypes = {
  person: propTypes.string.isRequired,
  addedChangedStatus: propTypes.string.isRequired,
  error: propTypes.bool.isRequired,
};

export default Notification;
