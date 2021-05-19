import React from 'react';
import { Redirect } from 'react-router-dom';
import QuestionSchema from '../models/Question.schema';
import './AddQuestion.scss';

interface AddQuestionProps {
    onAdd: (newQuestion: QuestionSchema) => void;
}

interface AddQuestionState {
    questionText: string;
    questionSubmitted: boolean;
}

class AddQuestion extends React.Component<AddQuestionProps, AddQuestionState> {
    constructor(props: AddQuestionProps) {
        super(props);
        this.state = {
            questionText: '',
            questionSubmitted: false
        };

        this.onQuestionSubmit = this.onQuestionSubmit.bind(this);
        this.showRedirect = this.showRedirect.bind(this);
    }

    onQuestionSubmit(event: React.FormEvent): void {
        event.preventDefault();
        if (this.state.questionText) {
            this.props.onAdd({
                text: this.state.questionText,
            });
            this.setState({ questionSubmitted: true });
        }
    }

    showRedirect() {
        return this.state.questionSubmitted ? <Redirect to="/" /> : '';
    }

    render() {
        return (
            <article className="add-question">
                <h1>
                    Add a question
                </h1>

                <form onSubmit={this.onQuestionSubmit}>
                    <label>
                        Question
                        <input className="add-question__question"
                            type="text"
                            value={this.state.questionText}
                            onChange={(event) => this.setState({ questionText: event.target.value })} />
                    </label>

                    <button className="add-question__add-btn"
                        type="submit">
                        Add
                    </button>
                </form>

                { this.showRedirect() }
            </article>
        );
    }
}

export default AddQuestion;