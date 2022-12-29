import React from "react";
import { Start } from "./components/Start";
import { Game } from "./components/Game";
import { v4 as uuid } from "uuid";
import arrayShuffle from "array-shuffle";

export const App = () => {
  const [startScreen, setStartScreen] = React.useState(true);
  const [categoryId, setCategoryId] = React.useState();
  const [newQuestions, setNewQuestions] = React.useState([]);

  function startButtonClick(data) {
    setStartScreen(false);
    setCategoryId(data.categoryId);
  }

  function reloadGame() {
    setStartScreen(true);
    setNewQuestions([]);
    setCategoryId();
  }

  const GET_QUIZ_API = `https://opentdb.com/api.php?amount=5&category=${categoryId}`;

  React.useEffect(() => {
    fetch(GET_QUIZ_API)
      .then((res) => res.json())
      .then((data) =>
        setNewQuestions(
          data.results.map((questions) => {
            return {
              ...questions,
              id: uuid(),
              all_answers: arrayShuffle([
                ...questions.incorrect_answers,
                questions.correct_answer,
              ]),
            };
          })
        )
      );
  }, [startScreen]);

  return (
    <div className="main">
      {startScreen ? (
        <Start startButtonClick={startButtonClick} />
      ) : (
        <Game newQuestions={newQuestions} reloadGame={reloadGame} />
      )}
    </div>
  );
};
