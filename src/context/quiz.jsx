import { createContext, useReducer } from "react";
import questions from "../data/questions"

const STAGES = ["Start", "Playing", "End"]

const initialState = {
  gameStage: STAGES[0],
  questions,
  currentQuestion: 0,
  score: 0,
  answerSelected: false,
};

const quizReducer = (state, action) => { 
  const reorderedQuestions = questions.sort(() => {
    return Math.random() - 0.5;
  });

  const nextQuestion = state.currentQuestion + 1;
  const endGame = !questions[nextQuestion]

  const answer = action.payload?.answer;
  const option = action.payload?.option;
  let correctAnswer = 0;
  
  if (answer === option) correctAnswer = 1;

  switch (action.type) {
    case "CHANGE_STATE":
      return {
        ...state,
        gameStage: STAGES[1],
      };

    case "REORDER_QUESTIONS":
      return {
        ...state,
        questions: reorderedQuestions,
      };

    case "CHANGE_QUESTION":
      return {
        ...state,
        currentQuestion: nextQuestion,
        gameStage: endGame ? STAGES[2] : state.gameStage,
      };
    
    case "NEW_GAME":
      return initialState;

    case "CHECK_ANSWER":
      if (state.answerSelected) return state;

      return {
        ...state,
        score: state.score + correctAnswer,
        answerSelected: option,
      };

    default:
      return state;
  }
};

export const QuizContext = createContext()

// eslint-disable-next-line react/prop-types
export const QuizProvider = ({ children }) => {
  const value = useReducer(quizReducer, initialState);

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};
