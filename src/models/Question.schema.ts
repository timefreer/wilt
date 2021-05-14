import { QuestionType } from './Question-type.enum';

interface QuestionSchema {
  text: string;
  type: QuestionType;
  date?: string; // yyyy-mm-dd
  answer?: string;
}

export default QuestionSchema;
