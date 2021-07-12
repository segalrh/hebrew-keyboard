import React, { useState, useEffect } from "react";
import KeyBoard from "./KeyBoard";
import Button from "@material-ui/core/Button";
import "./App.css";
import TextField from "@material-ui/core/TextField";

function App({}) {
  const [results, setResults] = useState([]);
  const [keyBoard, setKeyBoard] = useState(false);
  const [search, setSearch] = useState("");
  const addLetter = (letter) => {
    if (search === "" && letter === " ") {
    } else {
      const newText = search + letter;
      setSearch(newText);
    }
  };
  return (
    <div className="App">
      <TextField
        inputProps={{ style: { fontSize: 30 } }} // font size of input text
        InputLabelProps={{ style: { fontSize: 15 } }}
        id="standard-basic"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        label="שורת חיפוש"
      />
      <br />
      <br />
      <Button
        variant="contained"
        color="primary"
        onClick={() => setKeyBoard(!keyBoard)}
      >
        {!keyBoard ? "הצג מקלדת" : "הסתר מקלדת"}
      </Button>
      <br />
      <br />
      <div style={{ display: keyBoard ? "inline-block" : "none" }}>
        <KeyBoard addLetter={addLetter} />
        <br />
        <br />
      </div>{" "}
    </div>
  );
}

export default App;
