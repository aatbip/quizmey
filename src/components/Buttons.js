import React from "react";
import he from "he";
import { v4 as uuidv4 } from "uuid";

export const Buttons = (props) => {
  const [buttonClick, setButtonClick] = React.useState(false);

  const toggleOn = (event) => {
    setButtonClick((prevClick) => !prevClick);
  };

  return (
    <div>
      <button
        className={props.showScore ? "correct-answer" : "answer-buttons"}
        id={buttonClick ? "button-clicked" : ""}
        type="checkbox"
        key={uuidv4}
        value={props.id}
        onClick={(event) => {
          toggleOn(event);
          props.checkCorrect(event, props.correct_answer);
        }}
      >
        {he.decode(props.ans)}
      </button>
    </div>
  );
};
