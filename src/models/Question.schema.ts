import { QuestionType } from './Question-type.enum';

interface QuestionSchema {
  text: string;
  type: QuestionType;
  isoDate?: string; // yyyy-mm-dd
  answer?: string;
}

export default QuestionSchema;
