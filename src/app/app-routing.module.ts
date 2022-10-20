import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddtaskComponent } from './addtask/addtask.component';
import { DoneComponent } from './done/done.component';
import { GoingComponent } from './going/going.component';
import { HomeComponent } from './home/home.component';
import { LoginpageComponent } from './loginpage/loginpage.component';

const routes: Routes = [
      {path:"home",component:HomeComponent},
      {path:"",component:LoginpageComponent},
      {path:"onGoing",component:GoingComponent},
      {path:"done",component:DoneComponent},
      {path:"add",component:AddtaskComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
