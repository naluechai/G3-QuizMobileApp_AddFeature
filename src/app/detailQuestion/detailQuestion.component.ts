import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Router } from '@angular/router';
import { Dialogs } from "@nativescript/core";

import { CategoryService } from '../category/category.service'
import { CategoryForm , QuestionForm, ChoiceForm} from '../category/category' 

@Component({
  selector: 'ns-detailQuestion',
  templateUrl: './detailQuestion.component.html',
  styleUrls: ["./detailQuestion.component.css"]
})
export class DetailQuestionComponent implements OnInit {
  selected_category : CategoryForm;
  selected_question: QuestionForm;
  title :string;
  choiceName:string="";
  CategoryID:number;
  QuestionID:number;
  answer :number ;

  constructor( private categoryService :CategoryService, private route: ActivatedRoute, private router : Router) {}
  ngOnInit(): void {
    this.CategoryID = +this.route.snapshot.params.id
    this.QuestionID = +this.route.snapshot.params.questionId
    this.title = this.categoryService.getSelectedQuestionData( this.CategoryID, this.QuestionID).question
    this.selected_question = this.categoryService.getSelectedQuestionData( this.CategoryID, this.QuestionID)
    this.answer = this.selected_question.answer
  }
  delChoice( ChoiceID:number){
    var questionName = this.categoryService.getSelectedChoiceData(  this.CategoryID, this.QuestionID, ChoiceID).choice
    Dialogs.confirm({
      title: "Delete Choice",
      message: "Are you sure to Delete this Choice",
      cancelButtonText: "Cancel",
      okButtonText: "Comfirm"
    }).then(r =>{
      console.log(r);
      if(r){
        this.categoryService.deleteChoice(this.CategoryID, this.QuestionID, ChoiceID)
        this.selected_question = this.categoryService.getSelectedQuestionData( this.CategoryID, this.QuestionID)
      }
    });  

  }
  addChoice(){
    if (this.choiceName !=""){
      this.categoryService.addNewChoice(this.CategoryID, this.QuestionID, this.choiceName)
      this.choiceName="";
    }
  }
  changeAnswer(){
    this.router.navigate(['/reAnswer',this.CategoryID, this.QuestionID,]);
  }
  rename(ChoiceID:number){
    this.router.navigate(['/rename',this.CategoryID, this.QuestionID, ChoiceID]);
  }
  renameQuestion(){
      this.router.navigate(['/rename',this.CategoryID, this.QuestionID, NaN]);
  }
  back(){
    this.router.navigate(['/detail',this.CategoryID]);
  }
}
