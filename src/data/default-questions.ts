import QuestionSchema from "../models/Question.schema";

const defaultQuestions: QuestionSchema[] = [
    {
        isoDate: '2021-05-05',
        text: 'What is the funniest thing today?',
        // answer: 'Lorem ipsum udle seedle is foa tuta'
    }, {
        isoDate: '2021-05-05',
        text: 'What is the best GIF?',
        // answer: 'https://media.giphy.com/media/13ByqbM0hgfN7y/giphy.gif'
    }
];

export default defaultQuestions;