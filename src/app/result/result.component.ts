import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Router } from '@angular/router';

@Component({
  selector: 'ns-result',
  templateUrl: './result.component.html',
})
export class ResultComponent implements OnInit {
  result:number;
  
  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.result = +this.route.snapshot.params.score
  }
}
