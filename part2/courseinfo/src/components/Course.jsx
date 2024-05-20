import propTypes from "prop-types";

const Course = (props) => {
  return (
    <li key={props.id}>
      {props.content} {props.exercises}
    </li>
  );
};

Course.propTypes = {
  id: propTypes.number.isRequired,
  content: propTypes.string.isRequired,
  exercises: propTypes.number.isRequired,
};

export default Course;
