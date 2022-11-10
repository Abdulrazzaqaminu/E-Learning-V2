import _ from "lodash";
import { useEffect, useReducer, useState } from "react";
import { useParams } from "react-router-dom";
import Answers from "../answers/answers";
import ProgressBar from "../ProgressBar/ProgressBar";
import data from "../../data.json";
import "./quiz.css";
const initialState = null;

const reducer = (state, action) => {
  switch (action.type) {
    case "questions":
      action.value.forEach((question) => {
        question.options.forEach((option) => {
          option.checked = false;
        });
      });
      return action.value;
    case "answer":
      const questions = _.cloneDeep(state);
      questions[action.questionID].options[action.optionIndex].checked =
        action.value;

      return questions;
    default:
      return state;
  }
};

export default function Quiz() {
  const getQuestions = (videoID) => {
    const questionsID = data.quiz[videoID].questions;
    const questions = Object.values(questionsID);
    return questions;
  };

  const { id } = useParams();
  const [questions, SetQuestions] = useState(getQuestions(id));

  console.log(id);

  const { loading, error } = [];
  const [currentQuestion, setCurrentQuestion] = useState(0);
  console.log(questions);
  const [qna, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({
      type: "questions",
      value: questions,
    });
  }, [questions]);

  function handleAnswerChange(e, index) {
    dispatch({
      type: "answer",
      questionID: currentQuestion,
      optionIndex: index,
      value: e.target.checked,
    });
  }

  // handle when user clicks the next button to get the next question
  function nextQuestion() {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion((prevCurrent) => prevCurrent + 1);
    }
  }

  // handle when user clicks the prev button to get back to the previous question
  function prevQuestion() {
    if (currentQuestion >= 1 && currentQuestion <= questions.length) {
      setCurrentQuestion((prevCurrent) => prevCurrent - 1);
    }
  }

  // submit quiz
  async function submit() {
    return;
    // const { uid } = currentUser;

    // const db = getDatabase();
    // const resultRef = ref(db, `result/${uid}`);

    // await set(resultRef, {
    //   [id]: qna,
    // });

    // history.push({
    //   pathname: `/result/${id}`,
    //   state: {
    //     qna,
    //   },
    // });
  }

  // calculate percentage of progress
  const percentage =
    questions.length > 0 ? ((currentQuestion + 1) / questions.length) * 100 : 0;

  return (
    <>
      {loading && <div>Loading ...</div>}
      {error && <div>There was an error!</div>}
      {!loading && !error && qna && qna.length > 0 && (
        <>
          <h1>{qna[currentQuestion].title}</h1>
          <h4>Question can have multiple answers</h4>
          <Answers
            input
            options={qna[currentQuestion].options}
            handleChange={handleAnswerChange}
          />
          <ProgressBar
            next={nextQuestion}
            prev={prevQuestion}
            submit={submit}
            progress={percentage}
          />
        </>
      )}
    </>
  );
}
