import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Router } from '@angular/router';

import { CategoryService } from '../category/category.service'
import { CategoryForm , QuestionForm} from '../category/category' 

@Component({
  selector: 'ns-detailCategory',
  templateUrl: './detailCategory.component.html',
})
export class DetailCategoryComponent implements OnInit {
  selected_category : CategoryForm;
  categoryID :number;

  constructor( private categoryService :CategoryService, private route: ActivatedRoute, private router : Router) {}
  ngOnInit(): void {
    const id = +this.route.snapshot.params.id
    this.categoryID = id
    this.selected_category = this.categoryService.getSelectedCategoryData(id);
  }
  delCategory(){
    const id = +this.route.snapshot.params.id
    this.categoryService.deleteCategory(id)
    this.router.navigate(['/edit']);
  }
}
