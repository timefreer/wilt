import './App.scss';
import QuestionList from './QuestionList';
import QuestionSchema from '../models/Question.schema';
import QuestionType from '../models/Question-type.enum';
import Settings from './Settings';
import React from 'react';

const QUESTIONS: QuestionSchema[] = [
  {
    date: '2021-05-05',
    type: QuestionType.Text,
    text: 'What is the funniest thing today?',
    answer: 'Lorem ipsum udle seedle is foa tuta'
  }, {
    date: '2021-05-05',
    type: QuestionType.Gif,
    text: 'What is the best GIF?'
  }
];

enum ScreenName {
  QuestionList = 'QuestionList',
  Settings = 'Settings'
}

interface AppState {
  currentScreen: Map<ScreenName, boolean>;
}

class App extends React.Component<{}, AppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      currentScreen: new Map([
        [ScreenName.QuestionList, true],
        [ScreenName.Settings, false],
      ])
    };
  }

  setCurrentScreen(newScreen: ScreenName): void {
    console.log(`Setting screen to: ${newScreen}`)
    this.state.currentScreen.forEach((isVisible, screenName) => {
      this.setState({
        currentScreen: new Map([
          [ScreenName.QuestionList, newScreen === ScreenName.QuestionList],
          [ScreenName.Settings, newScreen === ScreenName.Settings]
        ])
      });
    });
    this.state.currentScreen.forEach((value, key) => console.log(`${key}\t${value}`))
  }

  showCurrentScreen() {
    console.log('showCurrentScreen()')
    if (this.state.currentScreen.get(ScreenName.Settings)) {
      return <Settings onSave={() => this.setCurrentScreen(ScreenName.QuestionList)} />;
    } else {
      return (
        <div>
          <QuestionList questions={QUESTIONS} />
          <button className="wilt__settings"
            onClick={() => this.setCurrentScreen(ScreenName.Settings)}>
            {ScreenName.Settings}
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
