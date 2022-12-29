import React from "react";

import he from "he";
import { v4 as uuidv4 } from "uuid";

export const ButtonsAfter = (props) => {
  return (
    <div>
      <button
        className="answer-buttons"
        id={
          props.ans === props.correct_answer
            ? "correct-answer"
            : "incorrect-answer"
        }
        type="checkbox"
        key={uuidv4}
        value={props.id}
      >
        {he.decode(props.ans)}
      </button>
    </div>
  );
};
