import './Question.scss';
import QuestionSchema from "../models/Question.schema";
import { useState } from 'react';

interface QuestionProps {
    question: QuestionSchema;
    onClick: (question: QuestionSchema) => void;
    onAnswer: (question: QuestionSchema) => void;
}

function Question(props: QuestionProps) {
    const question = props.question;
    const [newAnswer, setNewAnswer] = useState(question.answer || '');

    const answer = () => question.answer ? <p>{question.answer}</p> : '';
    const image = () => question.imageSrc ? <img src={question.imageSrc} alt='answer' /> : '';
    const answerButton = () => (
        <div className="question__answer-container">
            <button>Answer</button>
        </div>
    );

    const elementsToDisplay = () => {
        if (question.isAnswering) {
            return (
                <form className="question__answer-container question__answer-container--with-input"
                    onSubmit={() => answerQuestion()}>
                    <input value={newAnswer} onChange={(event) => setNewAnswer(event.target.value)} />
                    { answerButton() }
                </form>
            );
        }

        return (
            <div>
                { answer() }
                { image() }
                { (question.answer || question.imageSrc) ? '' : answerButton() }
            </div>
        );
    }

    function answerQuestion(): void {
        question.answer = newAnswer;
        props.onAnswer(question);
    }

    function onClick(): void {
        if (!question.isAnswering) {
            props.onClick(question);
        }
    }

    return (
        <article className="question"
            role="contentinfo"
            aria-label="Question"
            onClick={onClick}>
            <header>
                <h2>
                    { question.text }
                </h2>
            </header>

            { elementsToDisplay() }
        </article>
    );
}

export default Question;
