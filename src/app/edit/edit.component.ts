import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Router } from '@angular/router';

import { CategoryService } from '../category/category.service'
import { CategoryForm , QuestionForm} from '../category/category' 

@Component({
  selector: 'ns-edit',
  templateUrl: './edit.component.html',
})
export class EditComponent implements OnInit {
  NewCategory : Array<CategoryForm>
  categoryName :string

  constructor() {}
  ngOnInit(): void {}
  getNewCategory(){
    console.log(this.categoryName)
  }
}
