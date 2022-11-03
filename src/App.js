import Note from "./components/Note";

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
  const result = notes.map((note) => note.content);
  console.log(result);
};

export default App;
