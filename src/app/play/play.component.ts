import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Router } from '@angular/router';

import { CategoryService } from '../category/category.service'
import { CategoryForm , QuestionForm} from '../category/category' 

@Component({
  selector: 'ns-play',
  templateUrl: './play.component.html',
})

export class PlayComponent implements OnInit {
  title = "Let's Quiz";
  selected_category : CategoryForm;
  number:number = 0;
  answerList:Array<any>;
  selected_question :QuestionForm;

  constructor( private categoryService : CategoryService, private route: ActivatedRoute, private router : Router ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.params.id
    this.selected_category = this.categoryService.getSelectedCategoryData(id);
    this.answerList = this.selected_category.answer;
    this.selectedQuestion();
  }
  getConsoleLog(){
    console.log(this.answerList);
    //return this.selected_category.questions;
  }
  selectedQuestion(){
    console.log(this.selected_category.questions[this.number]);

    this.selected_question = this.selected_category.questions[this.number];
    this.number+=1;
    if (this.number == this.selected_category.questions.length+1){
      //this.number = 0;
      this.router.navigate(['/result']);
      }
    }
  collectSelected(){
    
  }
  }
  