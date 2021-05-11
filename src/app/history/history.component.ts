import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Router } from '@angular/router';

import { HistoryService } from './history.service'
import { LogForm } from './history'

@Component({
	selector: 'history',
	templateUrl: './history.component.html',
	styleUrls:['./history.component.css']
})

export class HistoryComponent implements OnInit {
	Log_List : Array<LogForm>;
	constructor(private historyService :HistoryService) { }

	ngOnInit() {
		this.Log_List = this.historyService.getLog()
	}
}