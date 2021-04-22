import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Router } from '@angular/router';

import { CategoryService } from '../category/category.service'
import { CategoryForm , QuestionForm} from '../category/category' 

@Component({
  selector: 'ns-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css'],
})

export class PlayComponent implements OnInit {
  title:string;
  selected_category : CategoryForm;
  selected_question :QuestionForm; //A moment Question that show
  answerList:Array<any>;
  lengthQuestion:number ;
  number:number = 0;
  score:number = 0;
  tempSelectedAnswer = 0; 
  Image:string="";
  GotImage:boolean;

  constructor( private categoryService : CategoryService, private route: ActivatedRoute, private router : Router ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.params.id
    this.selected_category = this.categoryService.getSelectedCategoryData(id);
    this.lengthQuestion = this.selected_category.questions.length;
    this.selectedQuestion();
    this.title = this.selected_category.name;
  }
  selectedQuestion(){
      this.checkImage();
      //console.log(this.selected_category.questions[this.number]);//undefined if last question
      if (this.number == this.lengthQuestion){//last question
        this.checkAnswer();
        this.router.navigate(['/result',this.selected_category.id,this.score]);
        }
      else if (this.tempSelectedAnswer == 0 ){//start first question
        this.selected_question = this.selected_category.questions[this.number];
        this.number+=1;
      }
      else {//next question 
        this.checkAnswer();
        this.selected_question = this.selected_category.questions[this.number];
        this.number+=1;
      }
      console.log("Question:",this.number,"of",this.lengthQuestion)
      console.log("Score",this.score)
    }
    checkImage(){
      if(this.number != this.lengthQuestion){
        this.Image = this.selected_category.questions[this.number].imgPath;
        if(this.Image !=""){
          this.GotImage = true;
        }
        else{
          this.GotImage = false
        }
      }
      else{
        
      }
    }
  collectSelected( id:number ){//select answer
    this.tempSelectedAnswer = id;
    this.selectedQuestion();
  }
  checkAnswer(){//every time click next button (use selectedQuestion) check answer u click with ans if same +1
    if(this.tempSelectedAnswer == this.selected_question.answer){
      this.score +=1
    }
  }
}
  