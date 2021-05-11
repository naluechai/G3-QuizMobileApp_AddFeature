import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Router } from '@angular/router';

import { HistoryService } from './history.service'
import { LogForm } from './history'

@Component({
	selector: 'history',
	templateUrl: './history.component.html',
})

export class HistoryComponent implements OnInit {

	constructor() { }

	ngOnInit() { }
}