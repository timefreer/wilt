import './App.scss';
import QuestionList from './QuestionList';
import QuestionSchema from '../models/Question.schema';
import Settings from './Settings';
import { useState } from 'react';
import AddQuestion from './AddQuestion';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import defaultQuestions from '../data/default-questions';

function App() {
  const [questions, setQuestions] = useState(defaultQuestions);

  function addQuestion(newQuestion: QuestionSchema): void {
    setQuestions([...questions, newQuestion]);
  }

  function openAnswerForQuestion(questionToAnswer: QuestionSchema): void {
    setQuestions(questions.map(question => {
      question.isAnswering = question.text === questionToAnswer.text;
      return question;
    }));
  }

  function answerQuestion(updatedQuestion: QuestionSchema): void {
    setQuestions(questions.map(question => {
      question.isAnswering = question.text === updatedQuestion.text ? false : question.isAnswering;
      question.answer = question.text === updatedQuestion.text ? updatedQuestion.answer : question.answer;
      return question;
    }));
  }

  return (
    <BrowserRouter>
      <main className="wilt">
        <Switch>
          <Route path="/settings">
            <Settings onSave={() => console.log('saved')} />
          </Route>

          <Route path="/add-question">
            <AddQuestion onAdd={addQuestion} />
          </Route>

          <Route exact path="/">
            <QuestionList
              questions={questions}
              onClick={openAnswerForQuestion}
              onAnswer={answerQuestion} />

            <Link to="/settings">
              <button className="wilt__settings">
                Settings
              </button>
            </Link>

            <Link to="/add-question">
              <button className="wilt__add-question">
                Add Question
              </button>
            </Link>
          </Route>
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
