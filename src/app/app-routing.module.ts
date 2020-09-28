import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './navigation/welcome/welcome.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { LoginComponent } from './auth/login/login.component';
import { ObjetsComponent } from './objets/objets/objets.component';
import { BorrowedComponent } from './objets/borrowed/borrowed.component';



const routes: Routes = [
  {path:'',component:WelcomeComponent},
  {path: 'employees',component:ObjetsComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignUpComponent},
  {path:'borrowed',component:BorrowedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
