import React from "react";
import "./styles.css";

export const FetchSelector = ({ onSelect }) => {
  const smallURL = `http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`;
  const bigURL = `http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`;

  return (
    <div className="selector-container">
      <h3>select amount of rows</h3>
      <button className="selector-btn" onClick={() => onSelect(smallURL)}>
        32 rows
      </button>
      <button className="selector-btn" onClick={() => onSelect(bigURL)}>
        1000 rows
      </button>
    </div>
  );
};
