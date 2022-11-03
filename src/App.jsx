import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { Loader } from "./Loader";
import { Table } from "./Table";
import { DetailRowView } from "./DetailRowView";
import { FetchSelector } from "./FetchSelector";
import { TableSearch } from "./TableSearch";

export const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sorting, setSorting] = useState({ key: "", ascending: true });
  const [row, setRow] = useState(null);
  const [hasFetchedData, setHasFetchedData] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  const PAGE_SIZE = 50;

  const fetchData = async (url) => {
    try {
      setLoading(true);

      const dataFromDb = await fetch(url).then((response) => response.json());

      return dataFromDb;
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const chunkData = (arr, size = 1) => {
    const chunked = arr.reduce((acc, val, index) => {
      if (index % size === 0) {
        acc.push([]);
      }
      acc[acc.length - 1].push(val);
      return acc;
    }, []);

    return chunked;
  };

  const displayedData = chunkData(data, PAGE_SIZE)[currentPage];

  const applySorting = (key, ascending) => {
    setSorting({ key: key, ascending: ascending });
  };

  const onRowSelect = (row) => {
    setRow(row);
  };

  const handleSelectedFetchData = (url) => {
    setHasFetchedData(true);
    fetchData(url).then((data) => setData(data));
  };

  const handlePageClick = (page) => {
    setCurrentPage(page.selected);
  };

  useEffect(() => {
    const sortedData = [...data].sort((a, b) => {
      return a[sorting.key]
        .toString()
        .localeCompare(b[sorting.key], "en", { numeric: true });
    });
    setData(sorting.ascending ? sortedData : sortedData.reverse());
  }, [sorting]);

  return (
    <div className="app">
      {!hasFetchedData ? (
        <FetchSelector onSelect={handleSelectedFetchData} />
      ) : loading ? (
        <Loader />
      ) : (
        <>
          <Table
            data={displayedData}
            sortParams={sorting}
            onSort={applySorting}
            onRowSelect={onRowSelect}
          />
          {data.length > PAGE_SIZE ? (
            <ReactPaginate
              previousLabel="◀"
              nextLabel="▶"
              breakLabel="..."
              pageCount={20}
              pageRangeDisplayed={4}
              marginPagesDisplayed={2}
              onPageChange={handlePageClick}
              containerClassName="pagination"
              activeClassName="active"
              hrefBuilder={(page, pageCount, selected) =>
                page >= 1 && page <= pageCount ? `/page/${page}` : "#"
              }
              hrefAllControls
              forcePage={currentPage}
              onClick={(clickEvent) => {
                console.log("onClick", clickEvent);
              }}
            />
          ) : null}
          {row ? <DetailRowView person={row} /> : null}
        </>
      )}
    </div>
  );
};
