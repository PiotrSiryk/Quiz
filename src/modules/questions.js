import React, { useContext } from "react";
import { questionsContext } from "../App";

export default function Questions() {
  const { setCurrent, current } = useContext(questionsContext);

  return (
    <div>
      <label htmlFor="questions">Number Of Questions</label>
      <input
        type="number"
        value={current.questions}
        onChange={(event) =>
          setCurrent((prev) => {
            return { ...prev, questions: event.target.value };
          })
        }
      />
    </div>
  );
}
