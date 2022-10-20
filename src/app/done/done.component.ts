import { Component, OnInit } from '@angular/core';
import { ApicallService } from '../apicall.service';

@Component({
  selector: 'app-done',
  templateUrl: './done.component.html',
  styleUrls: ['./done.component.css']
})
export class DoneComponent implements OnInit {

  public finishTask= <any>[]
  

  constructor(private getApi:ApicallService) { }

  ngOnInit()  {
    console.log("done component");
    this.finishTask=this.getApi.doneTask
    console.log(this.finishTask,"kiitiittt");
    
  }
}
