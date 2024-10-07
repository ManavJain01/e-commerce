import React, { useState, useEffect } from "react";
import ShowProducts from "./ShowProducts";

const Pagination = ({ itemsPerPage, data=[], loading }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [paginatedData, setPaginatedData] = useState([]);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  useEffect(() => {
    // Only update paginatedData if data or currentPage changes
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setPaginatedData(data.slice(startIndex, endIndex));
  }, [currentPage, data]); // Removed itemsPerPage from dependencies

  const goToNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const goToPreviousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const setPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="flex flex-col justify-between h-full">
      {/* Render the current page data */}
      <ShowProducts loading={loading} categories={paginatedData} />

      {/* Pagination Controls */}
      <div className="flex justify-center mt-4">
        <button
          onClick={goToPreviousPage}
          className="px-3 py-1 mx-1 bg-gray-200 rounded-md hover:bg-gray-300 disabled:opacity-50"
          disabled={currentPage === 1}
        >
          Previous
        </button>

        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => setPage(index + 1)}
            className={`px-3 py-1 mx-1 ${
              currentPage === index + 1
                ? "bg-blue-500 text-white"
                : "bg-gray-200"
            } rounded-md hover:bg-gray-300`}
          >
            {index + 1}
          </button>
        ))}

        <button
          onClick={goToNextPage}
          className="px-3 py-1 mx-1 bg-gray-200 rounded-md hover:bg-gray-300 disabled:opacity-50"
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;