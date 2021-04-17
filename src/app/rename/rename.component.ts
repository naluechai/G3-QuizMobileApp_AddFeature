import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Router } from '@angular/router';

import { CategoryService } from '../category/category.service'
import { CategoryForm , QuestionForm, ChoiceForm} from '../category/category' 

@Component({
  selector: 'ns-rename',
  templateUrl: './rename.component.html',
})
export class RenameComponent implements OnInit {
  CategoryID:number;
  QuestionID:number;
  ChoiceID:number;
  Choicename :string;

  constructor( private categoryService :CategoryService, private route: ActivatedRoute, private router : Router) {}
  ngOnInit(): void {
    this.CategoryID = +this.route.snapshot.params.CategoryID
    this.QuestionID = +this.route.snapshot.params.QuestionID
    this.ChoiceID = +this.route.snapshot.params.id
    console.log(this.CategoryID , this.QuestionID, this.ChoiceID)
    var name = this.categoryService.getSelectedChoiceData(this.CategoryID, this.QuestionID, this.ChoiceID)
    console.log(name)
    this.Choicename = name.choice
  }
  edit(){
    if(this.Choicename !=""){
      this.categoryService
     this.Choicename =""; 
    }
  }
  
}
