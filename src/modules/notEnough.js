import React from "react";

export default function NotEnough({ setQuestionsList, setCurrent }) {
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
    <>
      <div className="not-enough">
        Sorry, not enough questions in our database, please change category or
        lower ammout of questions
        <button onClick={() => goBack()}>Go back</button>
      </div>
    </>
  );
}
