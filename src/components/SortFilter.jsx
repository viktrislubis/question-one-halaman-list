import React from "react";
import "./SortFilter.css";

function SortFilter({ sort, setSort, pageSize, setPageSize }) {
  return (
    <div className="sort-filter-container">
      <div>
        <label htmlFor="pageSize">Show per page:</label>
        <select
          id="pageSize"
          value={pageSize}
          onChange={(e) => setPageSize(Number(e.target.value))}
        >
          {[10, 20, 50].map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="sort">Sort by:</label>
        <select
          id="sort"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="-published_at">Newest</option>
          <option value="published_at">Oldest</option>
        </select>
      </div>
    </div>
  );
}

export default SortFilter;
