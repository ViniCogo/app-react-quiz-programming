/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import Quiz from "../img/quiz.svg";

import "./welcome.css";

const welcome = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div id="welcome">
      <h2>Seja bem-vindo</h2>
      <p>Clique no botão abaixo</p>
      <button onClick={() => dispatch({ type: "CHANGE_STATE" })}>Iniciar</button>
      <img src={Quiz} alt="Início do quiz" />
    </div>
  );
};

export default welcome;
