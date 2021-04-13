import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Router } from '@angular/router';

import { CategoryService } from '../category/category.service'
import { CategoryForm , QuestionForm} from '../category/category' 

@Component({
  selector: 'ns-play',
  templateUrl: './play.component.html'
})

export class PlayComponent implements OnInit {
  title = "Let's Quiz";
  selected_category : CategoryForm;
  selected_question :QuestionForm;
  answerList:Array<any>;
  lengthQuestion:number ;
  number:number = 0;
  score:number = 0;
  selectedAnswer = [];
  tempSelectedAnswer = 0; 

  constructor( private categoryService : CategoryService, private route: ActivatedRoute, private router : Router ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.params.id
    this.selected_category = this.categoryService.getSelectedCategoryData(id);
    this.answerList = this.selected_category.answer;
    this.lengthQuestion = this.selected_category.answer.length;
    this.selectedQuestion();
  }
  getConsoleLog(){
    console.log(this.answerList);
    //return this.selected_category.questions;
  }
  selectedQuestion(){
      //console.log(this.selected_category.questions[this.number]);//undefined if last question
      if (this.number == this.lengthQuestion){//last question
        //this.number = 0;
        this.selectedAnswer.push(this.tempSelectedAnswer);
        this.router.navigate(['/result',this.selected_category.id,this.checkScore(this.score)]);
        }
      else if (this.tempSelectedAnswer == 0 ){//start first question
        this.selected_question = this.selected_category.questions[this.number];
        this.number+=1;
      }
      else {//next question 
        this.selectedAnswer.push(this.tempSelectedAnswer);
        this.selected_question = this.selected_category.questions[this.number];
        this.number+=1;
      }

    }
  collectSelected( id:number ){//select answer
    this.tempSelectedAnswer = id;
    console.log(this.tempSelectedAnswer);
  }
  checkScore( score:number):number{
    for (let i = 0 ; i < this.selectedAnswer.length ;i++){
      if(this.selectedAnswer[i] == this.answerList[i].answer){
        score +=1;
      }
    }
    return score;
  }
  }
  