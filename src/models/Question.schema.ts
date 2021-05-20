interface QuestionSchema {
  text: string;
  isoDate?: string; // yyyy-mm-dd
  isAnswering?: boolean;
  answer?: string;
  imageSrc?: string;
  orderNumber?: number;
}

export default QuestionSchema;
