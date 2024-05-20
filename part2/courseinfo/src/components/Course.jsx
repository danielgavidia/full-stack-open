import propTypes from "prop-types";

const Course = ({ name, exercises }) => {
  console.log(name);
  console.log(exercises);
  return (
    <>
      <div>
        {name} {exercises}
      </div>
      <br />
    </>
  );
};

Course.propTypes = {
  name: propTypes.string.isRequired,
  exercises: propTypes.number.isRequired,
};

export default Course;
