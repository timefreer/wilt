import './Question.scss';
import QuestionSchema from "../models/Question.schema";

function Question(props: { question: QuestionSchema }) {
    const question = props.question;

    return (
        <article className="question"
            role="contentinfo"
            aria-label="Question">
            <header>
                <h2>
                    { question.text }
                </h2>
            </header>
            <p>
                { question.answer || "You haven't answered this one yet" }
            </p>
        </article>
    );
}

export default Question;
