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

  constructor( private categoryService : CategoryService, private route: ActivatedRoute ) {
  }

  ngOnInit(): void {
    const id = +this.route.snapshot.params.id
    this.selected_category = this.categoryService.getSelectedCategoryData(id);
  }
  getTotalQuestions(){
    console.log(this.selected_category.questions);
    return this.selected_category.questions.length;
  }
  selectedQuestion(){
    }
  }
  