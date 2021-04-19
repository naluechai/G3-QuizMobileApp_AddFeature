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
    { id: 2 , name: "ExampleQuestion", questions: new Array<QuestionForm>(
      { id:1, question:"บางเดือนมี 30 วัน บางเดือนมี 31 วัน มีกี่เดือนที่มี 28 วัน ", choice: new Array<ChoiceForm>(
        { id:1, choice:"2เดือน"},
        { id:2, choice:"1เดือน"},
        { id:3, choice:"4เดือน"},
        { id:4, choice:"3เดือน"}
      ),
      answer:2
    },
    { id:2, question:"ถ้าคุณหมอให้ยามา 3 เม็ด แล้วบอกให้คุณกินยาทุกๆ ครึ่งชั่วโมงคุณต้องใช้เวลานานเท่าไหร่ถึงจะกินยาหมด ", choice: new Array<ChoiceForm>(
      { id:1, choice:"1 ชั่วโมง"},
      { id:2, choice:"1 ชั่วโมง 30 นาที"},
      { id:3, choice:"2 ชั่วโมง"},
      { id:4, choice:"2 ชั่วโมง 30 นาที"}
    ),
    answer:2
    },
  )
  },
  { id: 3 , name: "Meaning English with Thai", questions: new Array<QuestionForm>(
    { id:1, question:"Essential", choice: new Array<ChoiceForm>(
      { id:1, choice:"สำคัญ" },
      { id:2, choice:"ทั่วไป" },
      { id:3, choice:"หยิ่งผยอง" },
      { id:3, choice:"แก่นแท้" },
    ),
    answer:1
    },
    { id:2, question:"Skepticism", choice: new Array<ChoiceForm>(
      { id:1, choice:"ประมาท" },
      { id:2, choice:"ความสงสัย" },
      { id:3, choice:"อ่อนแอ" },
      { id:3, choice:"สงวน" },
    ),
    answer:2
    },
    { id:3, question:"Experimental", choice: new Array<ChoiceForm>(
      { id:1, choice:"ส่วนขยาย" },
      { id:2, choice:"ประสบการณ์" },
      { id:3, choice:"การทดลอง" },
      { id:3, choice:"สิ่งนอกกาย" },
    ),
    answer:3
    },
    { id:4, question:"Criticism", choice: new Array<ChoiceForm>(
      { id:1, choice:"วิจารณ์" },
      { id:2, choice:"โต้วาที" },
      { id:3, choice:"รุนแรง" },
      { id:3, choice:"ตอบโต้" },
    ),
    answer:
    },
    { id:5, question:"Arraignment", choice: new Array<ChoiceForm>(
      { id:1, choice:"การงาน" },
      { id:2, choice:"ความรับผิดชอบ" },
      { id:3, choice:"การวิพากษ์" },
      { id:3, choice:"การฟ้องร้อง" },
    ),
    answer:4
    },

  )
  }
    )

  saveCategory : Array<CategoryForm>  

  constructor(){
    const firsttimerun = AppSettings.getBoolean("firsttimerun");
    if(firsttimerun == null || firsttimerun == undefined){
      this.saveCategory = this.temp_Category;
      AppSettings.setString("CategoryData", JSON.stringify(this.saveCategory));
      AppSettings.setBoolean("firsttimerun", false)
    }
    else {
      this.saveCategory = JSON.parse(AppSettings.getString("CategoryData"));
    }
    console.log("work")
  }
  saveData(){
    AppSettings.setString("CategoryData", JSON.stringify(this.saveCategory))
  }
  

  getAllCategoryData():Array<CategoryForm>{
    return this.saveCategory;
  }
  getListofCategory():Array<any>{
    var temp = new Array();
    for(let i = 0; i < this.saveCategory.length; i++) {

      temp.push(this.saveCategory[i]);
    }
    return temp; 
  }
  getSelectedCategoryData( id:number ): CategoryForm{
    return this.saveCategory.filter((selected_category) => selected_category.id === id)[0]
  }
  getSelectedQuestionData( CategoryID:number, QuestionID:number): QuestionForm{
    var tempCategory = this.getSelectedCategoryData(CategoryID)
    for(let i = 0; i < tempCategory.questions.length; i++) {
      if(tempCategory.questions[i].id == QuestionID) {
          return tempCategory.questions[i]
      }
    }
  }
  getSelectedChoiceData( CategoryID:number, QuestionID:number, ChoiceID:number) :ChoiceForm{
    var tempCategory = this.getSelectedCategoryData(CategoryID)
    for(let i = 0; i < tempCategory.questions.length; i++) {
      if(tempCategory.questions[i].id == QuestionID) {
          for( let j = 0 ; j < tempCategory.questions[i].choice.length; j++){
            if (tempCategory.questions[i].choice[j].id == ChoiceID){
              return tempCategory.questions[i].choice[j]
            }
          }
      }
    }
  }
  deleteCategory( id:number ){
      for(let i = 0; i < this.saveCategory.length; i++) {
        if(this.saveCategory[i].id == id) {
            this.saveCategory.splice(i, 1);
            break;
        }
    }
    this.saveData()
  }
  deleteQuestion( CategoryID:number , QuestionID:number){
    var selectCategory = this.getSelectedCategoryData(CategoryID)
    //var selectQuestion = this.getSelectedQuestionData(CategoryID, QuestionID)
    for(let i = 0; i < selectCategory.questions.length; i++) {
      if(selectCategory.questions[i].id == QuestionID) {
        selectCategory.questions.splice(i, 1);
          break;
      }
    }
    this.saveData()
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
    this.saveData()
  }
  editCategoryName( id:number, name:string){
    var selectCategory = this.getSelectedCategoryData(id)
    selectCategory.name = name;
    this.saveData()
  }
  editQuestionName( CategoryID:number, QuestionID:number, name:string  ){
    var selectCategory = this.getSelectedCategoryData(CategoryID)
    for(let i = 0; i < selectCategory.questions.length; i++) {
      if(selectCategory.questions[i].id == QuestionID) {
        selectCategory.questions[i].question = name
        break;
      }
    }
    this.saveData()
  }
  editChoiceName( CategoryID:number , QuestionID:number, ChoiceID:number, name:string){
    var tempCategory = this.getSelectedCategoryData(CategoryID)
    for(let i = 0; i < tempCategory.questions.length; i++) {
      if(tempCategory.questions[i].id == QuestionID) {
          for (let j = 0 ; j < tempCategory.questions[i].choice.length ; j++){
            if(tempCategory.questions[i].choice[j].id == ChoiceID){
              console.log("Work")
              tempCategory.questions[i].choice[j].choice = name
              console.log(name)
              console.log(tempCategory.questions[i].choice[j].choice )
              break;
            }
        }
      }
    }
    this.saveData()
  }
  editAnswer( CategoryID:number , QuestionID:number, NewAnswer:number){ 
    var tempCategory = this.getSelectedCategoryData(CategoryID)
    for(let i = 0; i < tempCategory.questions.length; i++) {
      if(tempCategory.questions[i].id == QuestionID) {
          tempCategory.questions[i].answer = NewAnswer
          break;
            }
        }
        this.saveData()
    } 
  
  
  getLastCategoryID(){
    return this.saveCategory[this.saveCategory.length-1].id
  }
  addNewCategory( inputName:string){
    var lastID = this.getLastCategoryID()+1
    this.saveCategory.push(
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
  this.saveData()
  }

  getLastQuestionID( CategoryID:number ){ 
    var selectCategory = this.getSelectedCategoryData(CategoryID)
    return selectCategory.questions[selectCategory.questions.length-1].id
  }

  addNewQuestion( CategoryID:number ,name:string){ 
    var selectCategory = this.getSelectedCategoryData(CategoryID)
    var lastID = this.getLastQuestionID(CategoryID)+1
    selectCategory.questions.push({
       id: lastID, question: name, choice: new Array<ChoiceForm>(
          { id:1, choice:undefined},
          { id:2, choice:undefined},
          { id:3, choice:undefined},
          { id:4, choice:undefined}
         
       ),
       answer:undefined
    })
    this.saveData()
    }

  getLastChoiceID( CategoryID:number, QuestionID:number ){ 
      var selectCategory = this.getSelectedCategoryData(CategoryID)
      for (let i = 0 ; i < selectCategory.questions.length ; i++){
        if (selectCategory.questions[i].id == QuestionID){
          return selectCategory.questions[i].choice[selectCategory.questions[i].choice.length-1].id
        }
      } 
  }
  addNewChoice( CategoryID:number , QuestionID:number, name:string){
    var tempCategory = this.getSelectedCategoryData(CategoryID)
    var lastChoiceID = this.getLastChoiceID( CategoryID, QuestionID )+1
    console.log(lastChoiceID)
    for(let i = 0; i < tempCategory.questions.length; i++) {
      if(tempCategory.questions[i].id == QuestionID) {
         tempCategory.questions[i].choice.push({ id:lastChoiceID, choice:name})
      }
    }
    this.saveData()
  }
  
}
