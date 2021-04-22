import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Router } from '@angular/router';
import { Dialogs } from "@nativescript/core";

import { CategoryService } from '../category/category.service'
import { CategoryForm , QuestionForm} from '../category/category' 

@Component({
  selector: 'ns-edit',
  templateUrl: './edit.component.html',
  styleUrls: ["./edit.component.css"]
})
export class EditComponent implements OnInit {
  category_List : Array<CategoryForm>;
  categoryName:string ="";

  constructor( private categoryService :CategoryService, private router : Router) {}
  ngOnInit(): void {
    this.getCategoryData();
  }
  getCategoryData(){
    this.category_List = this.categoryService.getListofCategory()
  }
  addNewCategory(){
    if (this.categoryName !="" ){
      this.categoryService.addNewCategory( this.categoryName );
      this.categoryName =""
      this.getCategoryData();
    }
  }
  back(){
    this.router.navigate(['/menu']);
  }
  delCategory( inputID:number ) {
    Dialogs.confirm({
      title: "Delete Question",
      message: "Are you sure to Delete this Quiz?",
      cancelButtonText: "Cancel",
      okButtonText: "Comfirm"
    }).then(r =>{
      console.log(r);
      if(r){
        this.categoryService.deleteCategory(inputID)
        this.getCategoryData();
      }
    });   
  }
}
