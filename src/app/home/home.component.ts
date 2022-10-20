
import { DialogRef } from '@angular/cdk/dialog';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddtaskComponent } from '../addtask/addtask.component';

import { ApicallService } from '../apicall.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public postArray=<any>[]
  private finishTasks = <any>[]
  private startTasks = <any>[]

  constructor(private getApi:ApicallService,private dialog:MatDialog) { }

  ngOnChanges(){
    this.postArray.push(this.getApi.addTAsk)
  }
  ngOnInit() {
    console.log("home component");
    this.getApi.getPost().subscribe((res)=>{
      console.log(res)
      this.postArray=res
      console.log(this.postArray);  
    }) 
    
    this.postArray.push(this.getApi.addTAsk)
    this.postArray.push({ title: 'ruuning'})
    console.log(this.postArray,"fff");
    
  }

  startTask(item:any){
    alert("New task has been successfully started!")
    this.startTasks.push(item)
    this.getApi.startTask = this.startTasks
  }

  finishTask(item:any){
    if(window.confirm("would you like to finish this task?")){
    this.finishTasks.push(item)
    console.log(this.finishTasks);
    this.getApi.doneTask = this.finishTasks
  }}

  addTask(){
      this.dialog.open(AddtaskComponent,{width:'70%',height:''})
  }
}
