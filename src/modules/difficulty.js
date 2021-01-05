import React, { useContext } from "react";
import { questionsContext } from "../App";

export default function Difficulty() {
  const { setCurrent } = useContext(questionsContext);

  return (
    <div>
      <label htmlFor="difficulty">Select Difficulty</label>
      <select
        name="difficulty"
        id="difficulty"
        onChange={(event) => {
          setCurrent((prev) => {
            return { ...prev, difficulty: event.target.value };
          });
        }}
      >
        <option value="">any Difficulty</option>
        <option value="easy">Easy</option>
        <option value="medium">medium</option>
        <option value="hard">hard</option>
      </select>
    </div>
  );
}
