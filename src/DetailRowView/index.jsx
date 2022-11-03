import React from "react";
import "./styles.css";

export const DetailRowView = ({ person }) => {
  return (
    <div className="detail-container">
      <p>
        Selected User: <b>{`${person.firstName} ${person.lastName}`}</b>
      </p>
      <p>
        Description: <br />
        <textarea defaultValue={person.description} rows={6} readOnly />
      </p>
      <p>
        Address: <b>{person.address.streetAddress}</b>
      </p>
      <p>
        City: <b>{person.address.city}</b>
      </p>
      <p>
        State: <b>{person.address.state}</b>
      </p>
      <p>
        ZIP: <b>{person.address.zip}</b>
      </p>
    </div>
  );
};
