import { Component, OnInit } from '@angular/core';
import { ApicallService } from '../apicall.service';

@Component({
  selector: 'app-going',
  templateUrl: './going.component.html',
  styleUrls: ['./going.component.css']
})
export class GoingComponent implements OnInit {

 


  public startTasks=<any>[]

  constructor(private getApi:ApicallService) { }

  ngOnInit() {
    console.log("going component");
    this.startTasks=this.getApi.startTask
    console.log(this.startTasks,"ssssss");
    
    
  }

  cancel(item:any){
    if(window.confirm("Woul you like to delete this running task?")){
    this.startTasks.splice(item,1)
    }
  }
  
  finishTask(item:any){
    alert("Task has been successfully completed!")
    this.getApi.doneTask.push(item)
    console.log(this.getApi.doneTask,"aaaaaaa");
    

  }
 

    
    
  }



