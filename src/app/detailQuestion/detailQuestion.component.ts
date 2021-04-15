import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Router } from '@angular/router';

import { CategoryService } from '../category/category.service'
import { CategoryForm , QuestionForm} from '../category/category' 

@Component({
  selector: 'ns-detailQuestion',
  templateUrl: './detailQuestion.component.html',
})
export class DetailQuestionComponent implements OnInit {
  selected_category : CategoryForm;
  selected_question: QuestionForm;
  title :string;
  choiceName:string="";
  CategoryID:number;
  QuestionID:number;

  constructor( private categoryService :CategoryService, private route: ActivatedRoute, private router : Router) {}
  ngOnInit(): void {
    this.CategoryID = +this.route.snapshot.params.id
    this.QuestionID = +this.route.snapshot.params.questionId
    this.title = this.categoryService.getSelectedQuestionData( this.CategoryID, this.QuestionID).question
    this.selected_question = this.categoryService.getSelectedQuestionData( this.CategoryID, this.QuestionID)
  }
  delQuestion(){
    this.categoryService.deleteQuestion(this.CategoryID ,this.QuestionID)
    this.router.navigate(['/detail',this.CategoryID]);
  }
  addChoice(){
    if (this.choiceName !=""){
      this.categoryService.addNewChoice(this.CategoryID, this.QuestionID, this.choiceName)
      this.choiceName="";
    }
    
  }
  
}
