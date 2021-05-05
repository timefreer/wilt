import { lazy } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import QuestionList from './QuestionList';

function App() {
  return (
    <div className="wilt">
      <header className="App-header">8
        <h1>
          WILT
        </h1>
        <QuestionList />
      </header>
    </div>
  );
}

export default App;
