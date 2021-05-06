import './QuestionList.css';
import QuestionSchema from '../models/Question.schema';
import Question from './Question';

function QuestionList(props: { questions: QuestionSchema[] }) {
  const questions = props.questions.map(question => {
    return <Question key={question.text} question={question} />
  });

  return (
    <article id="questions-to-answer-today"
      role="contentinfo"
      aria-label="Questions to answer today">
      { questions }
    </article>
  );
}

export default QuestionList;