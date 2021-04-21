
export interface CategoryForm { 
    id: number 
    name: string 
    questions: Array<QuestionForm> 
    
  }
  
export interface QuestionForm {
    id: number
    question: string
    imgPath: string
    choice: Array<ChoiceForm>
    answer : number
  }

export interface ChoiceForm {
    id: number
    choice: string
  }

  