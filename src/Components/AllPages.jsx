import React from "react";
import "./AllPages.css";

function AllPages({ allSelected, onAllPagesChange }) {
  return (
    <div className="header">
      <div>
        <span>All Pages</span>
      </div>
      <div>
        <input 
          type="checkbox" 
          checked={allSelected}
          onChange={onAllPagesChange} 
        />
      </div>
    </div>
  );
}

export default AllPages;
