import React, { useState } from 'react';
import { Link, Redirect, useRouteMatch } from 'react-router-dom';
import QuestionSchema from '../models/Question.schema';
import './AddQuestion.scss';

interface AddQuestionProps {
    onAdd: (newQuestion: QuestionSchema) => void;
}

function AddQuestion(props: AddQuestionProps) {
    const url = useRouteMatch().url.split('/add')[0];

    const [questionText, setQuestionText] = useState('');
    const [questionSubmitted, setQuestionSubmitted] = useState(false);

    const showRedirect = () => questionSubmitted ? <Redirect to={url} /> : '';

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

                <button className="button button--nav-right"
                    type="submit">
                    Add
                </button>
            </form>

            <Link to={`${url}`}>
                <button className="button button--nav-left">
                    Cancel
                </button>
            </Link>

            { showRedirect() }
        </article>
    );
}

export default AddQuestion;