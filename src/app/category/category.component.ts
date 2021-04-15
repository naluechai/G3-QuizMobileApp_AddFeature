import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Router } from '@angular/router';

import { CategoryService } from './category.service'
import { CategoryForm } from './category'
@Component({
  selector: 'ns-category',
  templateUrl: './category.component.html',
})
export class CategoryComponent implements OnInit {
  category_List : Array<CategoryForm>;
  
  constructor( private categoryService :CategoryService, private router : Router) {}
  ngOnInit(): void {
    this.getCategoryData();
  }
  getCategoryData(){
    this.category_List = this.categoryService.getListofCategory()
  }
}
