import { Injectable } from "@angular/core";
import { CategoryForm,QuestionForm,ChoiceForm } from './category'
import * as AppSettings from '@nativescript/core/application-settings'

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
    private temp_Category = new Array<CategoryForm> (
      { id:0 , name: "Test QuickMath", questions: new Array<QuestionForm>(
        { id:1, question:"1+1=?", choice: new Array<ChoiceForm>(
          { id:1, choice:"2"},
          { id:2, choice:"5"},
          { id:3, choice:"8"},
          { id:4, choice:"7"}
        ),
      answer:1
      },
        { id:2, question:"1*8=?", choice: new Array<ChoiceForm>(
          { id:1, choice:"21"},
          { id:2, choice:"5"},
          { id:3, choice:"8"},
          { id:4, choice:"7"}
        ),
      answer:3
    },
        { id:3, question:"32/8*2", choice: new Array<ChoiceForm>(
          { id:1, choice:"2"},
          { id:2, choice:"7"},
          { id:3, choice:"10"},
          { id:4, choice:"0"}
        ),
      answer:1
    },
      ),
      },
    { id: 1 , name: "Test 1 Question", questions: new Array<QuestionForm>(
        { id:1, question:"2 is True", choice: new Array<ChoiceForm>(
          { id:1, choice:"1"},
          { id:2, choice:"2"},
          { id:3, choice:"3"},
          { id:4, choice:"4"}
        ),
        answer:2
      },
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
  getSelectedQuestionData( CategoryID:number, QuestionID:number){
    var tempCategory = this.getSelectedCategoryData(CategoryID)
    for(let i = 0; i < tempCategory.questions.length; i++) {
      if(tempCategory.questions[i].id == QuestionID) {
          return tempCategory.questions[i]
      }
    }
  }
  deleteCategory( id:number ){
      for(let i = 0; i < this.temp_Category.length; i++) {
        if(this.temp_Category[i].id == id) {
            this.temp_Category.splice(i, 1);
            break;
        }
    }
  }
  deleteQuestion( CategoryID:number , QuestionID:number){
    var tempCategory = this.getSelectedCategoryData(CategoryID)
    for(let i = 0; i < tempCategory.questions.length; i++) {
      if(tempCategory.questions[i].id == QuestionID) {
          tempCategory.questions.splice(i, 1);
          break;
      }
    }
  }
  deleteChoice( CategoryID:number , QuestionID:number, ChoiceID:number){ 
    var tempCategory = this.getSelectedCategoryData(CategoryID)
    for(let i = 0; i < tempCategory.questions.length; i++) {
      if(tempCategory.questions[i].id == QuestionID) {
          for (let j = 0 ; i < tempCategory.questions[i].choice.length ; j++){
            if(tempCategory.questions[i].choice[j].id == ChoiceID){
              tempCategory.questions[i].choice.splice(i, 1);
              break;
            }
        }
      }
    }
  }
  editCategoryName( id:number, name:string){
    var selectCategory = this.getSelectedCategoryData(id)
    selectCategory.name = name;
  }
  editQuestionName( CategoryID:number, QuestionID:number, name:string  ){
    var selectCategory = this.getSelectedCategoryData(CategoryID)
    for(let i = 0; i < selectCategory.questions.length; i++) {
      if(selectCategory.questions[i].id == QuestionID) {
        selectCategory.questions[i].question = name
        break;
      }
    }
  }
  editChoiceName( CategoryID:number , QuestionID:number, ChoiceID:number, name:string){
    var tempCategory = this.getSelectedCategoryData(CategoryID)
    for(let i = 0; i < tempCategory.questions.length; i++) {
      if(tempCategory.questions[i].id == QuestionID) {
          for (let j = 0 ; i < tempCategory.questions[i].choice.length ; j++){
            if(tempCategory.questions[i].choice[j].id == ChoiceID){
              tempCategory.questions[i].choice[j].choice = name
              break;
            }
        }
      }
    }
  }
  getLastCategoryID(){
    return this.temp_Category[this.temp_Category.length-1].id
  }
  addNewCategory( inputName:string){
    var lastID = this.getLastCategoryID()+1
    this.temp_Category.push(
      { id:lastID , name:inputName, questions: new Array<QuestionForm>(
      { id:1, question:undefined, choice: new Array<ChoiceForm>(
        { id:1, choice:undefined},
        { id:2, choice:undefined},
        { id:3, choice:undefined},
        { id:4, choice:undefined}
      ),
      answer:undefined
    },
  )
  })
  }
}
