import React from "react";
import questionsQuizz from "../data/questionsQuizz.json";
import Question from "./Question";

interface QuestionsProps {
  difficulty: string;
}

interface QuestionType {
  question: string;
  options: string[];
  difficulty: string;
}

const Questions: React.FC<QuestionsProps> = ({ difficulty }) => {
  const filteredQuestions: QuestionType[] = questionsQuizz.questions.filter(
    (q: QuestionType) => q.difficulty === difficulty
  );

  return (
    <div>
      {filteredQuestions.map((q, index) => (
        <Question key={index} question={q.question} options={q.options} />
      ))}
    </div>
  );
};

export default Questions;
