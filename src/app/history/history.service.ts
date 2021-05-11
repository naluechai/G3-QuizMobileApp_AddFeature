import { Injectable } from "@angular/core";
import { LogForm } from './history'
import * as AppSettings from '@nativescript/core/application-settings'

@Injectable({
  providedIn: 'root',
})
export class HistoryService {
    private test_Log= new Array<LogForm> ({ 
		quiz_name:"first",
		score : 2
	},
    {	quiz_name:"sec",
		score:1
	}
  )
  constructor(){
    const LogData = AppSettings.getString("LogData");
    if(LogData.length == 63){
      this.saveLog = this.test_Log;
	  this.saveData();
    }else{
		console.log(AppSettings.getString("Logdata"))
		this.saveLog = JSON.parse(AppSettings.getString("Logdata"))
	}
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