import React from "react";
import "./Landing.css";
import question from "../../assets/question.svg";

function Landing() {
  return (
    <section className="landing-page">
      <img className="landing-image" src={question} alt="" />
      <div className="landing-text">
        <h1>Quiz</h1>
        <p>
          When you are ready, click the button below to begin your quiz.
          Goodluck!
        </p>
        <button>Start Quiz</button>
      </div>
    </section>
  );
}

export default Landing;
