import React from "react";
import { Buttons } from "./Buttons";
import { ButtonsAfter } from "./ButtonsAfter";

import he from "he";
import { v4 as uuidv4 } from "uuid";

export const GameArea = (props) => {
  const [isCorrect, setIsCorrect] = React.useState(false);

  let checkCorrect = (event, correct_answer) => {
    props.correct(event, correct_answer);

    if (event.target.innerText === correct_answer) {
      setIsCorrect((isCorrect) => !isCorrect);
    }
  };

  return (
    <div className="list">
      <div className="question-list">
        <p>{he.decode(props.question)}</p>
        <li>
          {props.all_answers.map((ans) => {
            return props.showScore ? (
              <ButtonsAfter
                id={props.id}
                key={uuidv4}
                ans={ans}
                correct_answer={props.correct_answer}
              />
            ) : (
              <Buttons
                id={props.id}
                key={uuidv4}
                ans={ans}
                correct_answer={props.correct_answer}
                checkCorrect={checkCorrect}
                showScore={props.showScore}
                isCorrect={isCorrect}
              />
            );
          })}
        </li>
      </div>
      <hr className="line" />
    </div>
  );
};
