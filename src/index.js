import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// import axios from "axios";
import App from "./App";

//  const promise = axios.get("http://localhost:3001/notes");
//  console.log(promise);

//  const promise2 = axios.get("http://localhost:3001/foobar");
// console.log(promise2);

//  promise.then((response) => {
//    console.log(response);
//  });

// axios
// .get("http://localhost:3001/notes")
// .then((response) => {
//   const notes = response.data;
//   ReactDOM.createRoot(document.getElementById("root")).render(
//     <App notes={notes} />
//   );
// });

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
