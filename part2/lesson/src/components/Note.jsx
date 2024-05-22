import propTypes from "prop-types";

const Note = ({ note }) => {
  console.log(note);
  return <li key={note.id}>{note.content}</li>;
};

Note.propTypes = {
  note: propTypes.object.isRequired,
};

export default Note;
