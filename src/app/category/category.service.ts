import { Injectable } from "@angular/core";
import { CategoryForm,QuestionForm,ChoiceForm, AnswerForm } from './category'
import * as AppSettings from '@nativescript/core/application-settings'

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
    private temp_Category = new Array<CategoryForm> (
      { id:0 , name: "QuickMath", questions: new Array<QuestionForm>(
        { id:1, question:"1+1=?", choice: new Array<ChoiceForm>(
          { id:1, answer:"2"},
          { id:2, answer:"5"},
          { id:3, answer:"8"},
          { id:4, answer:"7"}
        )},
        { id:2, question:"1*8=?", choice: new Array<ChoiceForm>(
          { id:1, answer:"21"},
          { id:2, answer:"5"},
          { id:3, answer:"8"},
          { id:4, answer:"7"}
        )},
        { id:3, question:"32/8*2", choice: new Array<ChoiceForm>(
          { id:1, answer:"2"},
          { id:2, answer:"7"},
          { id:3, answer:"10"},
          { id:4, answer:"0"}
        )},
      ), answer: new Array<AnswerForm>(
        { id:1, answer:1 },
        { id:2, answer:3 },
        { id:3, answer:1 },
        )
      },
    { id: 1 , name: "Conversation", questions: new Array<QuestionForm>(
        { id:1, question:"No light at 12 hour", choice: new Array<ChoiceForm>(
          { id:1, answer:"Day"},
          { id:2, answer:"Sleep"},
          { id:3, answer:"Raining"},
          { id:4, answer:"Night"}
        )},
    ),  answer: new Array<AnswerForm>(
      { id:1, answer:1 },
      { id:2, answer:3 },
      { id:3, answer:1 },
      )  
    },
    )

    
  constructor(){}

  getAllCategoryData():Array<CategoryForm>{
    return this.temp_Category;
  }
  getListofCategory():Array<any>{
    var temp = new Array();
    for(let i = 0; i < this.temp_Category.length; i++) {

      temp.push(this.temp_Category[i]);
    }
    return temp; 
  }
  getSelectedCategoryData( id:number ): CategoryForm{
    return this.temp_Category.filter((selected_category) => selected_category.id === id)[0]
  }
}
