import './Question.scss';
import QuestionSchema from "../models/Question.schema";

function Question(props: { question: QuestionSchema }) {
    const question = props.question;

    const answer = () => props.question.answer ? <p>{question.answer}</p> : '';
    const image = () => props.question.imageSrc ? <img src={question.answer} alt='answer' /> : '';
    const needToAnswer = () => {
        if (!answer() && !image()) {
            return (
                <div className="question__answer-btn-container">
                    <button>Answer</button>
                </div>
            );
        }
    };

    return (
        <article className="question"
            role="contentinfo"
            aria-label="Question">
            <header>
                <h2>
                    { question.text }
                </h2>
            </header>
            { answer() }
            { image() }
            { needToAnswer() }
        </article>
    );
}

export default Question;
