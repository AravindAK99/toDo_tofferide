import { inject, Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { CheckboxRequiredValidator } from '@angular/forms';
import { HomeComponent } from './home/home.component';



@Injectable({
  providedIn: 'root'
})
export class ApicallService {
  
  public doneTask=<any>[]
  public startTask=<any>[]
  public addTAsk=<any>[]
  

  constructor(private http:HttpClient ) { }

  getPost(){
    return this.http.get<any>('	https://jsonplaceholder.typicode.com/photos?_limit=10')
  }
  deletePost(){
    return this.http.delete<any>('https://jsonplaceholder.typicode.com/photos?_limit=10')
  }
  // newTask(){
  //   return this.http.put<any>('https://jsonplaceholder.typicode.com/photos?_limit=10',this.addTAsk)
  // }
}
