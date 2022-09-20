import React, { useState, useEffect } from "react";
import "./Quiz.css";
import quizTime from "../../assets/quizTime.svg";
import Question from "../Question/Question";
import { nanoid } from "nanoid";

function Quiz() {
  const [allQuizData, setAllQuizData] = useState([]);
  const [count, setCount] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [checked, setChecked] = useState(false);

  // useEffect(() => {
  //   console.log("Effect ran");
  //   fetch(
  //     "https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple"
  //   )
  //     .then((response) => response.json())
  //     .then((quizData) => {
  //       return (
  //         quizData.results.forEach(question => {
  //           let q = [];
  //           q.push({id: nanoid(), question: question.question, correct: question.correct_answer})
  //         })
  //         setAllQuizData(q);
  //       )
  //     });
  // }, []);

  // const shuffleOptions = (options) => {
  //   options.sort(() => Math.random() - 0.5);
  // };

  useEffect(() => {
    console.log("Effect ran");
    async function getQuestion() {
      const response = await fetch(
        "https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple"
      );
      const data = await response.json();
      let q = [];
      data.results.forEach((question) => {
        q.push({
          id: nanoid(),
          question: question.question,
          options: [...question.incorrect_answers, question.correct_answer],
          correctAnswer: question.correct_answer,
          selected: null,
          checked: false,
        });
      });
      // console.log(q);
      setAllQuizData(q);
      //console.log(q.options);
    }
    getQuestion();
  }, [count]);

  function handleCheck() {
    // let hasBeenAnswered = true;
    // allQuizData.forEach((question) => {
    //   if (question.selected === null) {
    //     // if question has not been answered
    //     hasBeenAnswered = false;

    //     return;
    //   }
    // });

    // if (!hasBeenAnswered) {
    //   // if hasBeenAnswered variable is false, function stops running
    //   return;
    // }

    // if hasBeenAnswered is true, the following block of code runs
    setAllQuizData((questions) =>
      questions.map((question) => {
        return { ...question, checked: true }; // all questions have been checked
      })
    );
    setChecked(true);

    let correctAnswers = 0;
    allQuizData.forEach((question) => {
      if (question.correctAnswer === question.selected) {
        correctAnswers += 1;
      }
    });
    setCorrect(correctAnswers);
  }

  function handleClickAnswer(id, answer) {
    setAllQuizData((questions) =>
      questions.map((question) => {
        return question.id === id
          ? { ...question, selected: answer }
          : question;
      })
    );
  }

  function handlePlayAgain() {
    setCount((count) => count + 1);
    setChecked(false);
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  // function shuffleOptions() {
  //   getOptions();

  //   for (let i = 0; i < 4; i++) {
  //     for (let i = 4 - 1; i > 0; i--) {
  //       let j = Math.floor(Math.random() * (i + 1));
  //       [options[i], options[j]] = [options[j], options[i]];
  //     }
  //   }
  // }

  const quizQuestions = allQuizData
    ? allQuizData.map((questionNumber) => {
        return (
          <Question
            key={questionNumber.id}
            id={questionNumber.id}
            q={questionNumber}
            handleClickAnswer={handleClickAnswer}
          />
        );
      })
    : [];

  return (
    <section className="question-page">
      <img className="question-image" src={quizTime} alt="" />
      <div className="question-text">
        {allQuizData.length > 0 ? (
          <form onSubmit={handleSubmit} className="questions">
            <fieldset className="question">{quizQuestions}</fieldset>
            {checked && <span className="score">You scored {correct}/5.</span>}
            <button
              className="submit"
              onClick={checked ? handlePlayAgain : handleCheck}
            >
              {checked ? "Play Again" : "Submit"}
            </button>
          </form>
        ) : (
          <p>Loading</p>
        )}
      </div>
    </section>
  );
}

export default Quiz;
