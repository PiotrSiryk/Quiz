import React from "react";

export default function Results({
  correct,
  length,
  setQuestionsList,
  setCurrent,
}) {
  const goBack = () => {
    setQuestionsList();
    setCurrent({
      questions: 10,
      category: "",
      difficulty: "",
      type: "",
    });
  };

  return (
    <div className="results">
      your final score is {correct}/{length}
      <button onClick={() => goBack()}>Go back</button>
    </div>
  );
}
