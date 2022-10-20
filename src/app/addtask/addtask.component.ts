import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ApicallService } from '../apicall.service';
import { MatDialog,MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent implements OnInit {
  taskForm: any;
  addtask=<any>[]

  constructor(private fb:FormBuilder,private route:Router,private api:ApicallService,public dialog:MatDialog,
    public dialogRef:MatDialogRef<AddtaskComponent>) { 
    this.taskForm = this.fb.group({
      title:['']
    })
  }

  ngOnInit(): void {
  }

  add(){
    this.addtask=this.taskForm.value
    console.log(this.addtask);
    this.api.addTAsk=this.addtask
    
    
    
    // this.api.addTAsk=this.taskForm.controls.task.value
    // console.log(this.api.addTAsk);
    
    
    
  }
}
