import propTypes from "prop-types";

const Part = ({ name, exercises }) => {
  console.log(name);
  console.log(exercises);
  return (
    <>
      <p>
        {name} {exercises}
      </p>
    </>
  );
};

Part.propTypes = {
  name: propTypes.string.isRequired,
  exercises: propTypes.number.isRequired,
};

export default Part;
