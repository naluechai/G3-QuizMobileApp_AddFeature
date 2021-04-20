import { Component, OnInit,  } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
//import { Page } from "tns-core-modules/ui/page";

@Component({
  selector: 'ns-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  
  constructor( ) {}//private page: Page 
  ngOnInit(): void {
    //this.page.actionBarHidden = true;
  }
}
