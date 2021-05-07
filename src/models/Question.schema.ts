import QuestionType from './Question-type.enum';

interface QuestionSchema {
  date: string; // yyyy-mm-dd
  type: QuestionType;
  text: string;
  answer?: string;
}

export default QuestionSchema;
