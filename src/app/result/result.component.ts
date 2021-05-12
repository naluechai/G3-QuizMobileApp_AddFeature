import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Router } from '@angular/router';

import { CategoryService } from '../category/category.service'
import { CategoryForm , QuestionForm} from '../category/category' 
import { HistoryService } from '../history/history.service'

@Component({
  selector: 'ns-result',
  templateUrl: './result.component.html',
  styleUrls: ["./result.component.css"]
})
export class ResultComponent implements OnInit {
  selected_category : CategoryForm;
  result:number;
  time:string;
  maxScore:number = 0;
  id = this.route.snapshot.params.id;

  constructor(private route: ActivatedRoute, private categoryService : CategoryService , private historyService : HistoryService ) {}
  ngOnInit(): void {
    const id = +this.route.snapshot.params.id
    this.selected_category = this.categoryService.getSelectedCategoryData(id);
    this.result = +this.route.snapshot.params.score
    this.time = this.route.snapshot.params.time_used
    this.maxScore = this.selected_category.questions.length
    this.historyService.addLog(this.selected_category.name,this.time,this.result);
  }
}
