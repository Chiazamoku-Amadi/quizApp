import React from "react";
import "./Question.css";
import { nanoid } from "nanoid";

function Question({ q, id, handleClickAnswer }) {
  let answers = q.options;

  function handleClick(answer) {
    // if (q.checked) {
    //   return;
    // }
    handleClickAnswer(id, answer);
  }

  const options = answers.map((answer) => {
    let id = null;
    if (q.checked) {
      if (answer === q.correctAnswer) {
        id = "correct";
      } else if (answer === q.selected) {
        id = "incorrect";
      } else {
        id = "not-selected";
      }
    }

    return (
      <button
        key={nanoid()}
        id={id}
        className={answer === q.selected ? "option selected" : "option"}
        onClick={() => handleClick(answer)}
      >
        {answer}
      </button>
    );
  });
  // console.log(options);

  return (
    <div>
      <div>{q.question}</div>
      <div className="options">{options}</div>
    </div>
  );
}

export default Question;
