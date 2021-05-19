interface QuestionSchema {
  text: string;
  isoDate?: string; // yyyy-mm-dd
  isAnswering?: boolean;
  answer?: string;
  imageSrc?: string;
}

export default QuestionSchema;
