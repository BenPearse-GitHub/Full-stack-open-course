import React from "react";

const Filter = ({ filterText, onChange }) => (
  <div>
    Filter shown with <input value={filterText} onChange={onChange} />
  </div>
);

export default Filter;
