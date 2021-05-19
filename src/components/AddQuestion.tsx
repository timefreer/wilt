import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import QuestionSchema from '../models/Question.schema';
import './AddQuestion.scss';

interface AddQuestionProps {
    onAdd: (newQuestion: QuestionSchema) => void;
}

function AddQuestion(props: AddQuestionProps) {
    const [questionText, setQuestionText] = useState('');
    const [questionSubmitted, setQuestionSubmitted] = useState(false);

    const showRedirect = () => questionSubmitted ? <Redirect to="/" /> : '';

    function onQuestionSubmit(event: React.FormEvent): void {
        event.preventDefault();
        if (questionText) {
            props.onAdd({ text: questionText });
            setQuestionSubmitted(true);
        }
    }

    return (
        <article className="add-question">
            <h1>
                Add a question
            </h1>

            <form onSubmit={onQuestionSubmit}>
                <label>
                    Question
                    <input className="add-question__question"
                        type="text"
                        value={questionText}
                        onChange={(event) => setQuestionText(event.target.value)} />
                </label>

                <button className="add-question__add-btn"
                    type="submit">
                    Add
                </button>
            </form>

            { showRedirect() }
        </article>
    );
}

export default AddQuestion;