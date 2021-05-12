import { Injectable } from "@angular/core";
import { LogForm } from './history'
import * as AppSettings from '@nativescript/core/application-settings'

@Injectable({
  providedIn: 'root',
})
export class HistoryService {
    private test_Log= new Array<LogForm> ({ 
		quiz_name:"",
		score : 0
	}
  )
  constructor(){
    const LogData = AppSettings.getString("LogData");
    console.log('LogData:'+LogData)
    
    if(LogData.length == 63){
      this.saveLog = this.test_Log;
	    this.saveData();
    }else{
      this.saveLog = JSON.parse(LogData)
      this.saveData()
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