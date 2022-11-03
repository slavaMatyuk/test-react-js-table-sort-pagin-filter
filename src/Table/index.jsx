import React from "react";
import "./styles.css";

export const Table = ({ data, onSort, sortParams, onRowSelect }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th onClick={() => onSort("id", !sortParams.ascending)}>
            ID
            <small className="sort-arrow">
              {sortParams.ascending && sortParams.key === "id"
                ? "▲"
                : !sortParams.ascending && sortParams.key === "id"
                ? "▼"
                : ""}
            </small>
          </th>
          <th onClick={() => onSort("firstName", !sortParams.ascending)}>
            Firstname
            <small className="sort-arrow">
              {sortParams.ascending && sortParams.key === "firstName"
                ? "▲"
                : !sortParams.ascending && sortParams.key === "firstName"
                ? "▼"
                : ""}
            </small>
          </th>
          <th onClick={() => onSort("lastName", !sortParams.ascending)}>
            Lastname
            <small className="sort-arrow">
              {sortParams.ascending && sortParams.key === "lastName"
                ? "▲"
                : !sortParams.ascending && sortParams.key === "lastName"
                ? "▼"
                : ""}
            </small>
          </th>
          <th onClick={() => onSort("email", !sortParams.ascending)}>
            Email
            <small className="sort-arrow">
              {sortParams.ascending && sortParams.key === "email"
                ? "▲"
                : !sortParams.ascending && sortParams.key === "email"
                ? "▼"
                : ""}
            </small>
          </th>
          <th onClick={() => onSort("phone", !sortParams.ascending)}>
            Phone
            <small className="sort-arrow">
              {sortParams.ascending && sortParams.key === "phone"
                ? "▲"
                : !sortParams.ascending && sortParams.key === "phone"
                ? "▼"
                : ""}
            </small>
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.id + row.phone} onClick={() => onRowSelect(row)}>
            <td>{row.id}</td>
            <td>{row.firstName}</td>
            <td>{row.lastName}</td>
            <td>{row.email}</td>
            <td>{row.phone}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
