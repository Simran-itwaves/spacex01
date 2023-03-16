import React from "react";

export default function ClearFilterButton({ handleClearFilter }) {
  return (
    <div>
      <button
        type="button"
        className="btn btn-danger btn-sm"
        onClick={() => handleClearFilter()}
      >
        Clear All
      </button>
    </div>
  );
}
