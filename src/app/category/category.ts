
export interface CategoryForm { 
    id: number 
    name: string 
    questions: Array<QuestionForm> 
    answer : Array<AnswerForm> 
  }
  
export interface QuestionForm {
    id: number
    question: string
    choice: Array<ChoiceForm>
  }

export interface ChoiceForm {
    id: number
    answer: string
  }

export interface AnswerForm {
  id:number
  answer:number
}

  