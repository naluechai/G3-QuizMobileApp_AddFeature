import { Injectable } from "@angular/core";
import { LogForm } from './history'
import * as AppSettings from '@nativescript/core/application-settings'

@Injectable({
  providedIn: 'root',
})
export class HistoryService {
    private temp_Log= new Array<LogForm> ({ 
		quiz_name:"first",
		score : 2
	},
    {	quiz_name:"sec",
		score:1
	}
  )
  constructor(){
    const LogData = AppSettings.getString("LogData");
    if(LogData != null && LogData != undefined){
      this.saveLog = this.temp_Log;
      AppSettings.setString("LogData", JSON.stringify(this.saveLog));
    }
	console.log(this.saveLog)
  }
  saveLog : Array<LogForm>
  saveData(){
    AppSettings.setString("LogData", JSON.stringify(this.saveLog))
  }
  addLog(name:string,score:number){
	this.saveLog.push({
		quiz_name: name,
		score:score
	})
	this.saveData();
  }
  getLog(){
	  return this.saveLog
  }
}