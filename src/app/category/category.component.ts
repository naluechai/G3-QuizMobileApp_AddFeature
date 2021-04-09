import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { CategoryService } from './category.service'
import { CategoryForm } from './category'
@Component({
  selector: 'ns-category',
  templateUrl: './category.component.html',
})
export class CategoryComponent implements OnInit {
  category_List : Array<CategoryForm>;
  listName :Array<string>

  constructor( private categoryService :CategoryService) {}
  ngOnInit(): void {
    this.category_List = this.categoryService.getAllCategoryData()
    this.listName = this.categoryService.getAllName();
  }
  tap(){
    console.log(this.category_List[0].id); //[0].id .name or [1]
  }
}
