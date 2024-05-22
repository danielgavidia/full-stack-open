import { useState, useEffect } from "react";
import Note from "./components/Note";
import noteService from "./services/notes";
import propTypes from "prop-types";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("...a new note");
  const [showAll, setShowAll] = useState(true);

  useEffect(() => {
    noteService.getAll().then((response) => {
      console.log("promise fulfilled");
      setNotes(response.data);
    });
  }, []);
  console.log(notes);
  console.log("render", notes.length, "notes");

  const addNote = (event) => {
    event.preventDefault();
    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5,
    };
    noteService.create(noteObject).then((response) => {
      console.log(response);
      setNotes(notes.concat(response.data));
      setNewNote("");
    });
  };

  const toggleImportanceOf = (id) => {
    const note = notes.find((n) => n.id === id);
    const changedNote = { ...note, important: !note.important };

    noteService.update(id, changedNote).then((response) => {
      setNotes(notes.map((n) => (n.id !== id ? n : response.data)));
    });
  };

  const handleNoteChange = (event) => {
    console.log(event.target.value);
    setNewNote(event.target.value);
  };

  const notesToShow = showAll ? notes : notes.filter((note) => note.important);

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notesToShow.map((note) => (
          <Note
            key={note.id}
            note={note}
            toggleImportance={() => toggleImportanceOf(note.id)}
          />
        ))}
      </ul>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? "important" : "all"}
        </button>
      </div>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange} />
        <button type="submit">save</button>
      </form>
    </div>
  );
};

App.propTypes = {
  values: propTypes.array.isRequired,
};

export default App;
