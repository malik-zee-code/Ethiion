import React from "react";
import { useSelector } from "react-redux";
import Card from "../../../UI/Card";
import QuestionariesItem from "../QuestionariesItem/QuestionariesItem";
import Headers from "../Template-Headers/Headers";

const Questionaries = () => {
  const questionaries = useSelector((state) => state.template.questionaries);
  return (
    <Card>
      <Headers
        btnText="+ Create Questionaries"
        title="Questionaries"
        desc="Questionaries can be used to gather additional information from applicants either when submitting their resume, such as after a phone screen. Questionaries are limited to no more then 100 questions"
      />
      {questionaries.map((q) => (
        <QuestionariesItem questions={q.questions} />
      ))}
    </Card>
  );
};

export default Questionaries;
