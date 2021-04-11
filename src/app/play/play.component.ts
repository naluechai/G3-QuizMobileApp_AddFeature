import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

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
  selected_question :QuestionForm;
  constructor( private categoryService : CategoryService, private route: ActivatedRoute ) {
  }

  ngOnInit(): void {
    const id = +this.route.snapshot.params.id
    this.selected_category = this.categoryService.getSelectedCategoryData(id);
    this.selectedQuestion();
  }
  getTotalQuestions(){
    console.log(this.selected_question.question);
    //return this.selected_category.questions;
  }
  selectedQuestion(){
    console.log(this.selected_category.questions[this.number]);
    this.selected_question = this.selected_category.questions[this.number];
    this.number+=1;
    if (this.number ==this.selected_category.questions.length){
      this.number = 0;
    }
    }
  }
  