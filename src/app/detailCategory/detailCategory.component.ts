import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Router } from '@angular/router';

import { CategoryService } from '../category/category.service'
import { CategoryForm , QuestionForm} from '../category/category' 

@Component({
  selector: 'ns-detailCategory',
  templateUrl: './detailCategory.component.html',
  styleUrls: ["./detailCategory.component.css"]
})
export class DetailCategoryComponent implements OnInit {
  selected_category : CategoryForm;
  categoryID :number;
  questionName:string="";

  constructor( private categoryService :CategoryService, private route: ActivatedRoute, private router : Router) {}
  ngOnInit(): void {
    this.categoryID = +this.route.snapshot.params.id
    this.selected_category = this.categoryService.getSelectedCategoryData(this.categoryID);
  }
  delQuestion( QuizID:number , QuestionID:number){
    this.categoryService.deleteQuestion(QuizID, QuestionID)
    this.router.navigate(['/detail',QuizID]);
  }
  addQuestion(){
    if (this.questionName !=""){
      this.categoryService.addNewQuestion(this.categoryID, this.questionName)
      this.questionName="";
    }
  }
  renameCategory(){
    this.router.navigate(['/rename', this.selected_category.id, NaN, NaN]);
  }
  back(){
    this.router.navigate(['/edit']);
  }
}
