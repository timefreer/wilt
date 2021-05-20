import QuestionSchema from "../models/Question.schema";

const defaultQuestions: QuestionSchema[] = [
    {
        isoDate: new Date().toISOString().split('T')[0],
        text: 'What has been the funniest thing?',
        // answer: 'Lorem ipsum udle seedle is foa tuta'
    }, {
        isoDate: new Date().toISOString().split('T')[0],
        text: 'What has been the most interesting thing?',
        // answer: 'https://media.giphy.com/media/13ByqbM0hgfN7y/giphy.gif'
    }, {
        isoDate: new Date().toISOString().split('T')[0],
        text: 'What has been the most important news?'
    }
];

export default defaultQuestions;