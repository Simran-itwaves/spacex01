import React from "react";
import ClearFilterButton from "../../Component/ClearFilterButton";
import RadioButton from "../../Component/Radiobutton";
import { filterDateOptions, filterStatusOptions } from "../Constant/index";

export default function FilterPanel({
  handleLaunchDate,
  handleLaunchStatus,
  handleLaunchUpcoming,
  handleClearFilter,
  check,
}) {
  console.log(check);
  return (
    <div>
      <div className="d-flex justify-content-between">
        <span>Filters</span>
        <ClearFilterButton handleClearFilter={handleClearFilter} />
      </div>
      <hr />
      <p className="fw-bold">Launch date</p>
      {filterDateOptions.map((options) => (
        <RadioButton
          check={check}
          key={options.id}
          options={options}
          handleChecked={handleLaunchDate}
        />
      ))}
      <hr />
      <p className="fw-bold">Launch Status</p>
      {filterStatusOptions.map((options) => (
        <RadioButton
          key={options.id}
          options={options}
          handleChecked={handleLaunchStatus}
        />
      ))}
      <hr />
      <div className="d-flex">
        <input
          type="checkbox"
          name="upcoming"
          value="upcoming"
          onChange={(e) => handleLaunchUpcoming(e.target.checked)}
        />
        <label className="mx-2">Is it upcoming ?</label>
      </div>
    </div>
  );
}
