import './Question.scss';
import QuestionSchema from "../models/Question.schema";
import { QuestionType } from '../models/Question-type.enum';

function Question(props: { question: QuestionSchema }) {
    const question = props.question;

    const questionElement = {
        [QuestionType.Text]: <p>{ question.answer }</p>,
        [QuestionType.Image]: <img src={ question.answer } alt='answer' />,
        'default': <p>You haven't answered this one yet</p>
    };

    const questionType = question.answer ? question.type : 'default';

    return (
        <article className="question"
            role="contentinfo"
            aria-label="Question">
            <header>
                <h2>
                    { question.text }
                </h2>
            </header>
            { questionElement[questionType] }
        </article>
    );
}

export default Question;
