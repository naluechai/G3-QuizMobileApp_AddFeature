import { Component, OnInit,  } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { CategoryService } from '../category/category.service'
import { Router } from '@angular/router';

import { EventData } from "@nativescript/core/data/observable";
import { ListPicker } from "@nativescript/core/ui/list-picker";

@Component({
  selector: 'ns-reanswer',
  templateUrl: './reanswer.component.html',
  //styleUrls: ['./reanswer.component.css'],
})
export class ReAnswerComponent implements OnInit {
  choice_list=[]
  CategoryID:number;
  QuestionID:number;
  Answer:number;

  constructor( private categoryService :CategoryService, private route: ActivatedRoute,  private router : Router ) {}
  ngOnInit(): void {
    this.getData()
  }
  getData(){
    this.CategoryID = +this.route.snapshot.params.id
    this.QuestionID = +this.route.snapshot.params.questionId
    var temp = this.categoryService.getSelectedQuestionData(this.CategoryID, this.QuestionID).choice
    this.Answer =  this.categoryService.getSelectedQuestionData(this.CategoryID, this.QuestionID).answer
    for(let i =0 ; i < temp.length;i++){
      this.choice_list.push(temp[i].choice);
    }
    console.log("answer:",this.Answer)
  }
  changeAnswer( AnswerID:number ){
    console.log("id",AnswerID)
      this.categoryService.editAnswer(this.CategoryID, this.QuestionID, AnswerID)
  }
  public onSelectedIndexChanged(args: EventData) {
    const picker = <ListPicker>args.object;
    console.log("index picker",picker.selectedIndex) 
    this.changeAnswer(picker.selectedIndex+1)
  }
  cancel(){
    this.router.navigate(['/detail',this.CategoryID, this.QuestionID]);
  }
}
