
import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators} from '@angular/forms'
import { Router } from '@angular/router';


@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {

  logForm:any
  submit = false
  constructor(private fb: FormBuilder,private route:Router) { 

    this.logForm = this.fb.group({
      email:["",[Validators.required,Validators.email]],
      password:["",[Validators.required,Validators.minLength(7),Validators.maxLength(15),Validators.pattern("^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{7,12}$")]]
    })
               
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.submit=true
    if(this.logForm.invalid){
      console.log("error");
      
    }else{
      alert("Login successfull")
      this.route.navigate(["home"])

    }

  }

}
