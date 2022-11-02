import React, { useEffect, useState } from "react";
import { Loader } from "./Loader";
import { Table } from "./Table";

export const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sorting, setSorting] = useState({ key: "", ascending: true });

  const fetchData = async () => {
    try {
      setLoading(true);

      const dataFromDb = await fetch(
        `http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`
      ).then((response) => response.json());

      return dataFromDb;
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const applySorting = (key, ascending) => {
    setSorting({ key: key, ascending: ascending });
  };

  useEffect(() => {
    fetchData().then((data) => setData(data));
  }, []);

  useEffect(() => {
    const currentCopy = [...data];
    const sortedData = currentCopy.sort((a, b) => {
      return a[sorting.key]
        .toString()
        .localeCompare(b[sorting.key], "en", { numeric: true });
    });
    setData(sorting.ascending ? sortedData : sortedData.reverse());
  }, [sorting]);

  return (
    <div className="app">
      {loading ? (
        <Loader />
      ) : (
        <Table data={data} sortParams={sorting} onSort={applySorting} />
      )}
    </div>
  );
};
