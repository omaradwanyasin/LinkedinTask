import React from "react";
import "./PageSelect.css";

function PageSelect({ pageSelections, onPageChange }) {
  return (
    <>
      {["Page 1", "Page 2", "Page 3", "Page 4"].map((page, index) => (
        <div className="container" key={page}>
          <div>
            <span>{page}</span>
          </div>
          <div>
            <input
              type="checkbox"
              checked={pageSelections[index]}
              onChange={() => onPageChange(index)}
              className="checkbox"
            />
          </div>
        </div>
      ))}
    </>
  );
}

export default PageSelect;
