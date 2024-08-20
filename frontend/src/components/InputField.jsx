import React from "react";

function InputField({ handleChangefilter, value, title, name }) {
  return (
    <label className="sidebar-label-container">
      <input
        type="radio"
        id="test"
        value={value}
        name={name}
        onChange={handleChangefilter}
      />
      <span className="checkmark"></span>
      {title}
    </label>
  );
}

export default InputField;
