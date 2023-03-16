import React, { useEffect } from "react";

export default function RadioButton({ options, handleChecked, check }) {
  useEffect(() => {
    console.log("check==>", check);
  }, [check]);
  return (
    <div>
      <input
        type="radio"
        name={options.name}
        value={options.value}
        // eslint-disable-next-line no-unneeded-ternary
        checked={check === options.value ? true : false}
        // checked={check}
        // defaultChecked={check}
        onChange={(e) => handleChecked(e.target.value, e.target.checked)}
      />
      <label className="mx-2">{options.label}</label>
    </div>
  );
}
