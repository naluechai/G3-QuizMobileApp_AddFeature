import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

import { CategoryService } from '../category/category.service'
import { CategoryForm } from '../category/category' 

@Component({
  selector: 'ns-play',
  templateUrl: './play.component.html',
})
export class PlayComponent implements OnInit {
  selected_category : CategoryForm

  constructor( private categoryService : CategoryService, private route: ActivatedRoute ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.params.id
    this.selected_category = this.categoryService.getSelectedCategoryData(id);
  }
  getTotalQuestions(){
    return console.log(this.selected_category.name);
  }
  
}
