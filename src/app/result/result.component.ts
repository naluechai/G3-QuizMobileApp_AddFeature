import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Router } from '@angular/router';

import { CategoryService } from '../category/category.service'
import { CategoryForm , QuestionForm} from '../category/category' 

@Component({
  selector: 'ns-result',
  templateUrl: './result.component.html',
})
export class ResultComponent implements OnInit {
  selected_category : CategoryForm;
  result:number;
  maxScore:number = 0;
  id = this.route.snapshot.params.id;

  constructor(private route: ActivatedRoute, private categoryService : CategoryService) {}
  ngOnInit(): void {
    const id = +this.route.snapshot.params.id
    this.selected_category = this.categoryService.getSelectedCategoryData(id);
    this.result = +this.route.snapshot.params.score
    this.maxScore = this.selected_category.questions.length
  }
}
