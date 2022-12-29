import React from "react";
import { v4 as uuidv4 } from "uuid";

import he from "he";
import { GameArea } from "./GameArea";
import Confetti from "react-confetti";

let score = 0;

export const Game = (props) => {
  const [showScore, setShowScore] = React.useState(false);
  const correct = (event, correct_answer) => {
    const { innerText } = event.target;
    if (he.encode(innerText) === correct_answer) {
      score += 1;
    }
  };

  const resetGame = () => {
    score = 0;
    setShowScore((prevValue) => !prevValue);
  };
  const { width, height } = { width: 600, height: 900 };

  return (
    <div className="game-wrapper">
      {props.newQuestions.map((question) => {
        return (
          <div>
            {showScore && <Confetti width={width} height={height} />}

            <GameArea
              key={uuidv4}
              {...question}
              correct={correct}
              showScore={showScore}
            />
          </div>
        );
      })}
      <div className="button-wrapper">
        {showScore && <p>You scored {score}/5 correct answers</p>}
        {showScore ? (
          <button
            type="button"
            class="check-answer"
            // onClick={() => window.location.reload()}
            onClick={() => {
              props.reloadGame();
              resetGame();
            }}
          >
            Play Again
          </button>
        ) : (
          <button
            type="button"
            class="check-answer"
            onClick={() => setShowScore((prevValue) => !prevValue)}
          >
            Check Answers
          </button>
        )}
      </div>
    </div>
  );
};
