/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";

interface QuestionProps {
  question: string;
  options: string[];
}

const Question: React.FC<QuestionProps> = ({ question, options }) => {
  return (
    <div>
      <h3 className="question mb-4">{question}</h3>
      <ul className=" list-disc list-inside">
        {options.map((option, index) => (
          <li key={index}>{option}</li>
        ))}
      </ul>
    </div>
  );
};

export default Question;
