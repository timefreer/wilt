import React from 'react';
import { Redirect } from 'react-router-dom';
import { QuestionType, QuestionTypeKey } from '../models/Question-type.enum';
import QuestionSchema from '../models/Question.schema';
import './AddQuestion.scss';

interface AddQuestionProps {
    onAdd: (newQuestion: QuestionSchema) => void;
}

interface AddQuestionState {
    questionText: string;
    questionType: QuestionType;
    questionSubmitted: boolean;
}

class AddQuestion extends React.Component<AddQuestionProps, AddQuestionState> {
    readonly questionTypes = (Object.keys(QuestionType) as QuestionTypeKey[])
        .map((questionTypeKey: QuestionTypeKey) => {
            return (
                <option key={questionTypeKey} value={questionTypeKey}>
                    { QuestionType[questionTypeKey] }
                </option>);
        });

    constructor(props: AddQuestionProps) {
        super(props);
        this.state = {
            questionText: '',
            questionType: QuestionType.Text,
            questionSubmitted: false
        };

        this.onQuestionSubmit = this.onQuestionSubmit.bind(this);
        this.updateType = this.updateType.bind(this);
        this.showRedirect = this.showRedirect.bind(this);
    }

    onQuestionSubmit(event: React.FormEvent): void {
        event.preventDefault();
        if (this.state.questionText && this.state.questionType) {
            this.props.onAdd({
                text: this.state.questionText,
                type: this.state.questionType
            });
            this.setState({ questionSubmitted: true });
        }
    }

    updateType(event: React.ChangeEvent<HTMLSelectElement>): void {
        const newType = event.target.value as QuestionTypeKey;
        this.setState({ questionType: QuestionType[newType] });
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

                    <label>
                        type
                        <select className="add-question__type"
                            value={this.state.questionType}
                            onChange={this.updateType}>
                            { this.questionTypes }
                        </select>
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