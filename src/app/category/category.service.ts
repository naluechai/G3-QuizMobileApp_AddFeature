import { Injectable } from "@angular/core";
import { CategoryForm,QuestionForm,ChoiceForm, AnswerForm } from './category'
import * as AppSettings from '@nativescript/core/application-settings'

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
    private temp_Category = new Array<CategoryForm> (
      { id:0 , name: "Test QuickMath", questions: new Array<QuestionForm>(
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
    { id: 1 , name: "Test 1 Question", questions: new Array<QuestionForm>(
        { id:1, question:"2 is True", choice: new Array<ChoiceForm>(
          { id:1, answer:"1"},
          { id:2, answer:"2"},
          { id:3, answer:"3"},
          { id:4, answer:"4"}
        )},
    ),  answer: new Array<AnswerForm>(
      { id:1, answer:2 },
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
  deleteCategory( id:number ){
      for(let i = 0; i < this.temp_Category.length; i++) {
        if(this.temp_Category[i].id == id) {
            this.temp_Category.splice(i, 1);
            break;
        }
    }
  }
}
