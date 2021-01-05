import React, { useState } from "react";
import Results from "./results";
import he from "he";
import shuffle from "./shuffle";

export default function Test({ list, setQuestionsList, setCurrent }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [rightAnswer, setRightAnswer] = useState();

  const [answers, setAnswers] = useState(() => {
    let answers;
    answers = [
      list[currentQuestion].correct_answer,
      ...list[currentQuestion].incorrect_answers,
    ];
    shuffle(answers);
    return answers;
  });

  if (currentQuestion === list.length) {
    return (
      <>
        <Results
          correct={correct}
          length={list.length}
          setQuestionsList={setQuestionsList}
          setCurrent={setCurrent}
        />
      </>
    );
  }

  const handleClick = (event) => {
    event.preventDefault();
    if (rightAnswer) {
      return "";
    }
    setRightAnswer(list[currentQuestion].correct_answer);
    setTimeout(() => {
      if (list[currentQuestion].correct_answer === event.target.value) {
        setCurrentQuestion(currentQuestion + 1);
        setCorrect(correct + 1);
      } else {
        setCurrentQuestion(currentQuestion + 1);
      }
      setRightAnswer();
      setAnswers(() => {
        let answers;
        if (currentQuestion !== list.length && list[currentQuestion + 1]) {
          answers = [
            list[currentQuestion + 1].correct_answer,
            ...list[currentQuestion + 1].incorrect_answers,
          ];
          shuffle(answers);
        }

        return answers;
      });
    }, 700);
  };

  return (
    <form action="" className="question">
      <div>
        {<h4>{he.decode(list[currentQuestion].question)}</h4>}
        <div className="answers">
          {answers.map((element, index) => {
            return (
              <button
                className={
                  rightAnswer
                    ? rightAnswer === element
                      ? "answer-btn right"
                      : "answer-btn"
                    : ""
                }
                value={he.decode(element)}
                key={index}
                onClick={(event) => handleClick(event)}
              >
                {he.decode(element)}
              </button>
            );
          })}
        </div>
      </div>
    </form>
  );
}
