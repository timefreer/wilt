import './QuestionList.scss';
import QuestionSchema from '../models/Question.schema';
import Question from './Question';

interface QuestionListProps {
  questions: QuestionSchema[];
  onClick: (updatedQuestion: QuestionSchema) => void;
  onAnswer: (updatedQuestion: QuestionSchema) => void;
}

function QuestionList(props: QuestionListProps) {
  const questions = props
    .questions
    .map(question => (
      <Question
        key={question.text}
        question={question}
        onClick={() => props.onClick(question)}
        onAnswer={() => props.onAnswer(question)}
      />
    ));

  return (
    <article className="question-list">
      <h1>
        Questions For Today
      </h1>
      <section role="contentinfo" aria-label="Questions for today">
        { questions }
      </section>
    </article>
  );
}

export default QuestionList;
