import QuestionSchema from "../models/Question.schema";

const todaysDate = new Date().toISOString().split('T')[0];

const defaultQuestions: QuestionSchema[] = [
    {
        isoDate: todaysDate,
        text: 'What has been the funniest thing?',
        // answer: 'Lorem ipsum udle seedle is foa tuta',
    }, {
        isoDate: todaysDate,
        text: 'What has been the most interesting thing?',
        // imageSrc: 'https://media.giphy.com/media/13ByqbM0hgfN7y/giphy.gif',
    }, {
        isoDate: todaysDate,
        text: 'What has been the most important news?',
    }
];

export default defaultQuestions;