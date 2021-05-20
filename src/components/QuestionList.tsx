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
    .sort((value1, value2) => {
      const reallyBigNumber = 1_000_000_000;
      const orderNumber1 = value1.orderNumber ?? reallyBigNumber;
      const orderNumber2 = value2.orderNumber ?? reallyBigNumber;
      return orderNumber1 - orderNumber2;
    })
    .map(question => (
      <Question
        key={question.text}
        question={question}
        onClick={() => props.onClick(question)}
        onAnswer={() => props.onAnswer(question)}
      />
    ));

  return (
    <article id="questions-to-answer-today">
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
