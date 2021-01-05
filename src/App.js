import React, { useState } from "react";
import Loading from "./modules/loading";
import Questions from "./modules/questions";
import Categories from "./modules/categories";
import Type from "./modules/type";
import Difficulty from "./modules/difficulty";
import NotEnough from "./modules/notEnough";
import Test from "./modules/test";

export const questionsContext = React.createContext();

function App() {
  const [isLoading, setIsLoading] = useState();
  const [current, setCurrent] = useState({
    questions: 10,
    category: "",
    difficulty: "",
    type: "",
  });
  const [questionsList, setQuestionsList] = useState();
  const handleStart = (ev) => {
    const { questions, category, difficulty, type } = current;
    ev.preventDefault();
    if (questions > 50 || questions <= 0) {
      alert("bro... , are u retared?");
    } else {
      setIsLoading(true);
      const url = `https://opentdb.com/api.php?amount=${questions}&category=${category}&difficulty=${difficulty}&type=${type}`;
      const getData = async () => {
        const req = await fetch(url);
        const data = await req.json();
        setQuestionsList(data.results);
        setIsLoading(false);
      };
      getData();
    }
  };

  if (isLoading) {
    return <Loading />;
  }
  if (questionsList && questionsList.length < current.questions) {
    return (
      <NotEnough setQuestionsList={setQuestionsList} setCurrent={setCurrent} />
    );
  }

  if (questionsList && questionsList.length > 0) {
    return (
      <>
        <Test
          list={questionsList}
          setQuestionsList={setQuestionsList}
          setCurrent={setCurrent}
        />
      </>
    );
  }

  return (
    <questionsContext.Provider value={{ current, setCurrent }}>
      <main>
        <form action="">
          <Questions />
          <Categories />
          <Difficulty />
          <Type />
          <button onClick={(ev) => handleStart(ev)}>Start Quiz</button>
        </form>
      </main>
    </questionsContext.Provider>
  );
}

export default App;
