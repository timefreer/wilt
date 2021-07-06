import './App.scss';
import QuestionList from './QuestionList';
import QuestionSchema from '../models/Question.schema';
import Settings from './Settings';
import { useState, useEffect } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import defaultQuestions from '../data/default-questions';
import EditQuestions from './EditQuestions';

interface SharedAnswer {
  answer: string | undefined;
  used: boolean;
}

function App() {
  const [questions, setQuestions] = useState(defaultQuestions);
  const [sharedAnswer, setSharedAnswer] = useState({
    answer: undefined,
    used: false
  } as SharedAnswer);

  useEffect(() => {
    const parsedUrl = new URL(window.location.href);
    const answerTitle = removeStartingAndEndingDoubleQuotes(parsedUrl.searchParams.get('title'));
    const answerText = removeStartingAndEndingDoubleQuotes(parsedUrl.searchParams.get('text'));
    const answer = `${answerTitle}\n\n${answerText}`;

    if (answerTitle && answerText && answer !== sharedAnswer.answer) {
      setSharedAnswer({
        answer: answer,
        used: false
      });
    }
  }, [sharedAnswer.answer]);

  function removeStartingAndEndingDoubleQuotes(string: string | null): string | undefined {
    let alteredString;

    if (string) {
      alteredString = (string as string).substring(1, string.length - 1);
    } else if (string === null) {
      alteredString = undefined;
    }

    return alteredString;
  }

  function addQuestion(newQuestion: QuestionSchema): void {
    setQuestions([...questions, newQuestion]);
  }

  function moveQuestionUpInList(questionToMove: QuestionSchema): void {
    const questionToMoveIndex = questions.findIndex(question => question.text === questionToMove.text);
    const previousQuestionIndex = questionToMoveIndex - 1;
    const isQuestionToMoveAtTopOfList = questionToMoveIndex === 0;

    if (!isQuestionToMoveAtTopOfList) {
      questions[previousQuestionIndex] = questions.splice(questionToMoveIndex, 1, questions[previousQuestionIndex])[0];
    }

    setQuestions([...questions]);
  }

  function moveQuestionDownInList(questionToMove: QuestionSchema): void {
    const questionToMoveIndex = questions.findIndex(question => question.text === questionToMove.text);
    const nextQuestionIndex = questionToMoveIndex + 1;
    const isQuestionToMoveAtBottomOfList = questionToMoveIndex === questions.length - 1;

    if (!isQuestionToMoveAtBottomOfList) {
      questions[questionToMoveIndex] = questions.splice(nextQuestionIndex, 1, questions[questionToMoveIndex])[0];
    }

    setQuestions([...questions]);
  }

  function deleteQuestion(questionToDelete: QuestionSchema): void {
    const questionToDeleteIndex = questions.findIndex(question => question.text === questionToDelete.text);
    questions.splice(questionToDeleteIndex, 1);
    setQuestions([...questions]);
  }

  function openAnswerForQuestion(questionToAnswer: QuestionSchema): void {
    setQuestions(questions.map(question => {
      question.isAnswering = question.text === questionToAnswer.text;

      if (question.isAnswering && !sharedAnswer.used && sharedAnswer.answer) {
        question.answer = sharedAnswer.answer;
        sharedAnswer.used = true;
      }

      return {...question};
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
            <Settings />
          </Route>

          <Route path="/edit-questions">
            <EditQuestions 
              questions={questions}
              onAdd={addQuestion}
              onMoveQuestionUp={moveQuestionUpInList}
              onMoveQuestionDown={moveQuestionDownInList}
              onDelete={deleteQuestion} />
          </Route>

          <Route exact path="/">
            <QuestionList
              questions={questions}
              onClick={openAnswerForQuestion}
              onAnswer={answerQuestion} />

            <Link to="/settings">
              <button className="button button--nav-left">
                Settings
              </button>
            </Link>

            <Link to="/edit-questions">
              <button className="button button--nav-right">
                Edit Questions
              </button>
            </Link>
          </Route>
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
