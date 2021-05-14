import './App.scss';
import QuestionList from './QuestionList';
import QuestionSchema from '../models/Question.schema';
import { QuestionType } from '../models/Question-type.enum';
import Settings from './Settings';
import React from 'react';
import AddQuestion from './AddQuestion';

const QUESTIONS: QuestionSchema[] = [
  {
    date: '2021-05-05',
    type: QuestionType.Text,
    text: 'What is the funniest thing today?',
    answer: 'Lorem ipsum udle seedle is foa tuta'
  }, {
    date: '2021-05-05',
    type: QuestionType.Image,
    text: 'What is the best GIF?'
  }
];

enum ScreenName {
  QuestionList = 'Question List',
  Settings = 'Settings',
  AddQuestion = 'Add Question'
}

interface AppState {
  currentScreen: { [key in ScreenName]: boolean };
  questions: QuestionSchema[];
}

class App extends React.Component<{}, AppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      currentScreen: {
        [ScreenName.QuestionList]: true,
        [ScreenName.Settings]: false,
        [ScreenName.AddQuestion]: false,
      },
      questions: QUESTIONS
    };

    this.setCurrentScreen = this.setCurrentScreen.bind(this);
    this.addQuestion = this.addQuestion.bind(this);
  }

  setCurrentScreen(newScreen: ScreenName): void {
    this.setState({
      currentScreen: {
        [ScreenName.QuestionList]: newScreen === ScreenName.QuestionList,
        [ScreenName.Settings]: newScreen === ScreenName.Settings,
        [ScreenName.AddQuestion]: newScreen === ScreenName.AddQuestion,
      },
    });
  }

  addQuestion(newQuestion: QuestionSchema): void {
    this.setState((state, props) => ({
      questions: [...state.questions, newQuestion]
    }));
    this.setCurrentScreen(ScreenName.QuestionList)
  }

  showCurrentScreen() {
    if (this.state.currentScreen[ScreenName.Settings]) {
      return <Settings onSave={() => this.setCurrentScreen(ScreenName.QuestionList)} />;
    } else if (this.state.currentScreen[ScreenName.AddQuestion]) {
      return <AddQuestion onAdd={this.addQuestion} />;
    } else {
      return (
        <div>
          <QuestionList questions={this.state.questions} />
          <button className="wilt__settings"
            onClick={() => this.setCurrentScreen(ScreenName.Settings)}>
            {ScreenName.Settings}
          </button>
          <button className="wilt__add-question"
            onClick={() => this.setCurrentScreen(ScreenName.AddQuestion)}>
            {ScreenName.AddQuestion}
          </button>
        </div>
      );
    }
  }

  render() {
    return (
      <main className="wilt">
        { this.showCurrentScreen()}
      </main>
    );
  }
}

export default App;
