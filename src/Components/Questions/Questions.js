import React, { useState } from "react";
import "./Questions.css";
import quizTime from "../../assets/quizTime.svg";

function Questions() {
  const [radio, setRadio] = useState({ question1: "" });

  function handleChange(event) {
    return setRadio((prevRadio) => {
      return {
        ...prevRadio,
        [event.target.name]: event.target.value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <section className="question-page">
      <img className="question-image" src={quizTime} alt="" />
      <div className="question-text">
        <h3>Question</h3>
        <form onSubmit={handleSubmit} className="questions">
          <fieldset className="question">
            <h4>Question 1</h4>

            <div className="options">
              <div>
                <input
                  type="radio"
                  id="opt-A"
                  name="question1"
                  value="optionA"
                  checked={radio.question1 === "optionA"}
                  onChange={handleChange}
                />
                <label htmlFor="opt-A">Option A</label>
              </div>

              <div>
                <input
                  type="radio"
                  id="opt-B"
                  name="question1"
                  value="optionB"
                  checked={radio.question1 === "optionB"}
                  onChange={handleChange}
                />
                <label htmlFor="opt-B">Option B</label>
              </div>

              <div>
                <input
                  type="radio"
                  id="opt-C"
                  name="question1"
                  value="optionC"
                  checked={radio.question1 === "optionC"}
                  onChange={handleChange}
                />
                <label htmlFor="opt-C">Option C</label>
              </div>

              <div>
                <input
                  type="radio"
                  id="opt-D"
                  name="question1"
                  value="optionD"
                  checked={radio.question1 === "optionD"}
                  onChange={handleChange}
                />
                <label htmlFor="opt-D">Option D</label>
              </div>
            </div>
          </fieldset>

          <button>Next</button>
        </form>
      </div>
    </section>
  );
}

export default Questions;
