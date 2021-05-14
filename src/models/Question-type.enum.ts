enum QuestionType {
  Image = 'Image or GIF',
  Text = 'Text'
}

type QuestionTypeKey = keyof typeof QuestionType;

export { QuestionType };
export type { QuestionTypeKey };
