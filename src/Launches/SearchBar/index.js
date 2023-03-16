import React from "react";
import { FiSearch } from "react-icons/fi";

export default function SearchBar({ handleSearchData }) {
  return (
    <div className="position-relative">
      <input
        type="text"
        className="d-flex w-100 border-0 border-bottom px-5"
        style={{ height: "50px" }}
        placeholder="Search by Rocket name"
        onChange={(e) => {
          handleSearchData(e.target.value);
        }}
      />
      <FiSearch
        className="position-absolute"
        style={{ bottom: "15px", left: "10px" }}
      />
    </div>
  );
}
