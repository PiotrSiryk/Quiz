import React, { useContext } from "react";
import { questionsContext } from "../App";

export default function Type() {
  const { setCurrent } = useContext(questionsContext);

  return (
    <div>
      <label htmlFor="type">Select Type</label>
      <select
        name="type"
        id="type"
        onChange={(event) => {
          setCurrent((prev) => {
            return { ...prev, type: event.target.value };
          });
        }}
      >
        <option value="">Any type</option>
        <option value="multiple">multiple choice</option>
        <option value="boolean">True / False</option>
      </select>
    </div>
  );
}
