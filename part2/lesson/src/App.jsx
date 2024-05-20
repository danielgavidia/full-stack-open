import Note from "./components/Note";
import propTypes from "prop-types";

const App = ({ notes }) => {
  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map((note) => (
          <Note key={note.id} note={note} />
        ))}
      </ul>
    </div>
  );
};

App.propTypes = {
  notes: propTypes.array.isRequired,
};

export default App;
