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
  title :string

  constructor( private categoryService :CategoryService, private route: ActivatedRoute, private router : Router) {}
  ngOnInit(): void {
    const Categoryid = +this.route.snapshot.params.id
    const questionID = +this.route.snapshot.params.questionId
    this.title = this.categoryService.getSelectedQuestionData( Categoryid, questionID).question
    this.selected_question = this.categoryService.getSelectedQuestionData( Categoryid, questionID)
  }
  delQuestion(){
    const Categoryid = +this.route.snapshot.params.id
    const questionID = +this.route.snapshot.params.questionId
    this.categoryService.deleteQuestion(Categoryid ,questionID)
    this.router.navigate(['/detail',Categoryid]);
  }
  
}
