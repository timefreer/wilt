interface QuestionSchema {
  text: string;
  isoDate?: string; // yyyy-mm-dd
  answer?: string;
  imageSrc?: string;
}

export default QuestionSchema;
