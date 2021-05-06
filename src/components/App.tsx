import './App.scss';
import QuestionList from './QuestionList';
import QuestionSchema from '../models/Question.schema';
import QuestionType from '../models/Question-type.enum';

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

function App() {
  return (
    <main className="wilt">
      <QuestionList questions={QUESTIONS} />
    </main>
  );
}

export default App;
