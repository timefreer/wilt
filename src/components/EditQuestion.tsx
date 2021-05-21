import './Question.scss';
import './EditQuestion.scss';
import QuestionSchema from '../models/Question.schema';

interface EditQuestionProps {
    question: QuestionSchema;
    onMoveQuestionUp: (question: QuestionSchema) => void;
    onMoveQuestionDown: (question: QuestionSchema) => void;
    onDelete: (question: QuestionSchema) => void;
}

function EditQuestion(props: EditQuestionProps) {
    const question = props.question;

    return (
        <article className="question"
            role="contentinfo"
            aria-label="Question">
            <header className="question__header-container">
                <h2>
                    {question.text}
                </h2>

                <div className="question__reorder-container">
                    <button className="question__reorder-btn"
                        onClick={() => props.onMoveQuestionUp(question)}>
                        <img src="/icons/arrow-up.svg"
                            alt="up arrow" />
                    </button>

                    <button className="question__reorder-btn"
                        onClick={() => props.onMoveQuestionDown(question)}>
                        <img src="/icons/arrow-down.svg"
                            alt="down arrow" />
                    </button>
                </div>
            </header>

            <button className="question__delete-btn"
                onClick={() => props.onDelete(question)}>
                Delete
            </button>
        </article>
    );
}

export default EditQuestion