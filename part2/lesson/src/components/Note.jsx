import propTypes from "prop-types";

const Note = ({ note, toggleImportance }) => {
  console.log(note);
  const label = note.important ? "make not important" : "make important";
  return (
    <li key={note.id}>
      {note.content} <button onClick={toggleImportance}>{label}</button>
    </li>
  );
};

Note.propTypes = {
  note: propTypes.object.isRequired,
  toggleImportance: propTypes.func.isRequired,
};

export default Note;
