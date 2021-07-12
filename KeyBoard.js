import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function KeyBoard({ addLetter }) {
  const top = ["פ", "ם", "ן", "ו", "ט", "א", "ר", "ק"];
  const medium = ["ף", "ך", "ל", "ח", "י", "ע", "כ", "ג", "ד", "ש"];
  const bottom = ["ץ", "ת", "צ", "מ", "נ", "ה", "ב", "ס", "ז"];
  const rptTop = top.map((a) => (
    <div key={a} className="key" onClick={() => addLetter(a)}>
      <div className="centerKey  pointer">{a}</div>
    </div>
  ));
  const rptMedium = medium.map((a) => (
    <div key={a} className="key" onClick={() => addLetter(a)}>
      <div className="centerKey  pointer">{a}</div>
    </div>
  ));
  const rptBottom = bottom.map((a) => (
    <div key={a} className="key app" onClick={() => addLetter(a)}>
      <div className="centerKey  pointer">{a}</div>
    </div>
  ));
  return (
    <div className="App">
      {rptTop}
      <br />
      {rptMedium}
      <br />

      {rptBottom}
      <br />
      <div className="keySpace app  pointer" onClick={() => addLetter(" ")}>
        <div className="centerKey"></div>
      </div>
    </div>
  );
}

export default KeyBoard;
