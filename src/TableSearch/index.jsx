import React, { useState } from "react";
import "./styles.css";

export const TableSearch = ({ onSearch }) => {
  const [input, setInput] = useState("");

  const handleInputChange = (event) => setInput(event.target.value);

  return (
    <div className="search-container">
      <button className="search-btn" onClick={() => onSearch(input)}>
        Search
      </button>
      <input
        type="search"
        className="input"
        value={input}
        onChange={handleInputChange}
      />
    </div>
  );
};
