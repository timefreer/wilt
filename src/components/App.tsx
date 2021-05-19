import './App.scss';
import QuestionList from './QuestionList';
import QuestionSchema from '../models/Question.schema';
import Settings from './Settings';
import React from 'react';
import AddQuestion from './AddQuestion';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import defaultQuestions from '../data/default-questions';

interface AppState {
  questions: QuestionSchema[];
}

class App extends React.Component<{}, AppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      questions: defaultQuestions
    };

    this.addQuestion = this.addQuestion.bind(this);
  }

  addQuestion(newQuestion: QuestionSchema): void {
    this.setState((state, props) => ({
      questions: [...state.questions, newQuestion]
    }));
  }

  render() {
    return (
      <BrowserRouter>
        <main className="wilt">
          <Switch>
            <Route path="/settings">
              <Settings onSave={() => console.log('saved')} />
            </Route>

            <Route path="/add-question">
              <AddQuestion onAdd={this.addQuestion} />
            </Route>

            <Route exact path="/">
              <QuestionList questions={this.state.questions} />

              <Link to="/settings">
                <button className="wilt__settings">
                  Settings
                </button>
              </Link>

              <Link to="/add-question">
                <button className="wilt__add-question">
                  Add Question
                </button>
              </Link>
            </Route>
          </Switch>
        </main>
      </BrowserRouter>
    );
  }
}

export default App;
