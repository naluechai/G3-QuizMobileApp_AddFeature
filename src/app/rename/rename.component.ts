import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Router } from '@angular/router';

import { CategoryService } from '../category/category.service'
import { CategoryForm , QuestionForm, ChoiceForm} from '../category/category' 

@Component({
  selector: 'ns-rename',
  templateUrl: './rename.component.html',
})
export class RenameComponent implements OnInit {
  CategoryID:number;
  QuestionID:number;
  ChoiceID:number;
  SelectedData :string;

  constructor( private categoryService :CategoryService, private route: ActivatedRoute, private router : Router) {}
  ngOnInit(): void {
    this.CategoryID = +this.route.snapshot.params.id
    this.QuestionID = +this.route.snapshot.params.questionId
    this.ChoiceID = +this.route.snapshot.params.choiceId
    console.log(this.CategoryID,  this.QuestionID, this.ChoiceID)
    this.checkData()
  }
  checkData(){
    if ( this.QuestionID !=NaN && this.ChoiceID != NaN  ){  
      console.log("1")
      var ChoiceData = this.categoryService.getSelectedChoiceData(this.CategoryID, this.QuestionID, this.ChoiceID)
      this.SelectedData = ChoiceData.choice 
      
    }
    else if ( this.QuestionID != NaN){
      console.log("2")
      var QuestionData = this.categoryService.getSelectedQuestionData(this.CategoryID, this.QuestionID)   
      this.SelectedData = QuestionData.question
    }
    else {
      console.log("3")
      var CategoryData = this.categoryService.getSelectedCategoryData(this.CategoryID)   
      this.SelectedData = CategoryData.name
    }
    return this.SelectedData
  }

  edit(){
    if(this.SelectedData !="" && this.SelectedData != undefined){
      console.log(this.CategoryID, this.QuestionID, this.CategoryID, this.SelectedData)
      if( this.ChoiceID != NaN){
        console.log("4")
        
        this.categoryService.editChoiceName(this.CategoryID, this.QuestionID, this.ChoiceID , this.SelectedData)
      }
      else if ( this.QuestionID !=NaN && this.ChoiceID != NaN){
        console.log("5")
        this.categoryService.editQuestionName(this.CategoryID, this.QuestionID, this.SelectedData)
      }
      else {
        console.log("6")
        this.categoryService.editCategoryName(this.CategoryID, this.SelectedData)
      }
      this.router.navigate(['/detail',this.CategoryID, this.QuestionID]);
    }
  }
}
