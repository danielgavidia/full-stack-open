import propTypes from "prop-types";
import Part from "./Part";

const Course = ({ name, parts }) => {
  const total = parts.map((i) => i.exercises).reduce((s, p) => s + p, 0);
  return (
    <>
      <h2>{name}</h2>
      <div>
        {parts.map((part) => (
          <Part key={part.id} name={part.name} exercises={part.exercises} />
        ))}
      </div>
      <h4>total of {total} exercises</h4>
    </>
  );
};

Course.propTypes = {
  name: propTypes.string.isRequired,
  parts: propTypes.object.isRequired,
};

export default Course;
