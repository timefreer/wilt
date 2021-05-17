import './QuestionList.css';
import QuestionSchema from '../models/Question.schema';
import Question from './Question';

function QuestionList(props: { questions: QuestionSchema[] }) {
  const questions = props.questions.map(question => {
    return <Question key={question.text} question={question} />
  });

  return (
    <article>
      <h1>
        Questions For Today
      </h1>
      { questions }
    </article>
  );
}

export default QuestionList;
