import QuestionSchema from '../models/Question.schema';
import './QuestionList.scss';
import './EditQuestions.scss';
import EditQuestion from './EditQuestion';
import { Route, Switch, useRouteMatch } from 'react-router';
import { Link } from 'react-router-dom';
import AddQuestion from './AddQuestion';

interface EditQuestionsProps {
    questions: QuestionSchema[];
    onAdd: (newQuestion: QuestionSchema) => void;
    onMoveQuestionUp: (question: QuestionSchema) => void;
    onMoveQuestionDown: (question: QuestionSchema) => void;
    onDelete: (deletedQuestion: QuestionSchema) => void;
}

function EditQuestions(props: EditQuestionsProps) {
    const { path, url } = useRouteMatch();

    const questions = props
        .questions
        .map(question => (
            <EditQuestion
                key={question.text}
                question={question}
                onMoveQuestionUp={props.onMoveQuestionUp}
                onMoveQuestionDown={props.onMoveQuestionDown}
                onDelete={props.onDelete}
            />
        ));

    return (
        <div>
            <Switch>
                <Route exact path={`${path}`}>
                    <article className="question-list">
                        <header>
                            <h1>
                                Edit Questions
                            </h1>
                        </header>

                        <section role="contentinfo" aria-label="Current questions">
                            { questions }
                        </section>

                        <Link to="/">
                            <button className="button button--nav-left">
                                Back to Home
                            </button>
                        </Link>

                        <Link to={`${url}/add`}>
                            <button className="button button--nav-right">
                                Add Question
                            </button>
                        </Link>
                    </article>
                </Route>

                <Route path={`${path}/add`}>
                    <AddQuestion onAdd={props.onAdd} />
                </Route>
            </Switch>
        </div>
    );
}

export default EditQuestions;