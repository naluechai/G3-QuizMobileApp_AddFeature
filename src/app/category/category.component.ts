import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { CategoryService } from './category.service'
import { CategoryForm } from './category'
@Component({
  selector: 'ns-category',
  templateUrl: './category.component.html',
})
export class CategoryComponent implements OnInit {
  category_List : Array<any>;
  listName :Array<any>
  
  constructor( private categoryService :CategoryService) {}
  ngOnInit(): void {
    this.category_List = this.categoryService.getAllCategoryData()
    this.listName = this.categoryService.getAllName();
  }
  tap(){
    console.log(this.listName[0]);
    //console.log(this.category_List[0].name);
    //console.log(this.categoryService.getSelectedCategoryData(this.category_List[0].name));
    //console.log(this.category_List[0].id); //[0].id .name or [1]
  }
}
