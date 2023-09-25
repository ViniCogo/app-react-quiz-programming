/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import "./Option.css";

const Option = ({ option, selectOption, answer }) => {
  const [quizState, dispacth] = useContext(QuizContext);

  return (
  <div className="option" onClick={() => selectOption(option)}>
    <p>{option}</p>
  </div>
  );
};

export default Option;