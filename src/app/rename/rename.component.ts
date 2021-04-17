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
    console.log(this.CategoryID, this.QuestionID, this.ChoiceID)
    this.checkData()
  }
  // Check NaN with boolean will return False
  checkData(){
    if ( Boolean(this.QuestionID) == false && Boolean(this.ChoiceID) == false ){  
      var CategoryData = this.categoryService.getSelectedCategoryData(this.CategoryID)   
      this.SelectedData = CategoryData.name
    }
    else if ( Boolean(this.QuestionID) === true && Boolean(this.ChoiceID) == false ) {
      var QuestionData = this.categoryService.getSelectedQuestionData(this.CategoryID, this.QuestionID)   
      this.SelectedData = QuestionData.question
    }
    else { 
      var ChoiceData = this.categoryService.getSelectedChoiceData(this.CategoryID, this.QuestionID, this.ChoiceID)
      this.SelectedData = ChoiceData.choice 
    }
    return this.SelectedData
  }

  edit(){
    if(this.SelectedData !="" && this.SelectedData != undefined){
      if( Boolean(this.QuestionID) == false && Boolean(this.ChoiceID) == false  ){
        this.categoryService.editCategoryName(this.CategoryID, this.SelectedData)
        this.router.navigate(['/detail',this.CategoryID]);
      }
      else if ( Boolean(this.QuestionID) === true && Boolean(this.ChoiceID) == false  ){
        this.categoryService.editQuestionName(this.CategoryID, this.QuestionID, this.SelectedData)
        this.router.navigate(['/detail',this.CategoryID, this.QuestionID]);
      }
      else {
        this.categoryService.editChoiceName(this.CategoryID, this.QuestionID, this.ChoiceID , this.SelectedData)
        this.router.navigate(['/detail',this.CategoryID, this.QuestionID]);
      }
    }
  }
}
