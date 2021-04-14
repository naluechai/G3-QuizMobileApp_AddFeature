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
  category_List : Array<CategoryForm>;
  
  constructor( private categoryService :CategoryService, private router : Router) {}
  ngOnInit(): void {
    this.getCategoryData();
  }
  getCategoryData(){
    this.category_List = this.categoryService.getListofCategory()
  }
  
}
