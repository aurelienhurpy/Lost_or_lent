import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/AuthService';
import { UIService } from 'src/app/services/UIService';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sign-up',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  loginForm:FormGroup;
  isLoading:boolean = false;

  private loadingSubscription:Subscription;

  constructor( private authService:AuthService, private uiService:UIService) { }

  ngOnInit() {

    this.loadingSubscription = this.uiService.loadingStateChanges.subscribe(
      isLoading =>{
        this.isLoading = isLoading
      }
    );

    this.loginForm = new FormGroup(
      {
        email: new FormControl(
          '',
          {
            validators:
              [
                Validators.required,
                Validators.email
              ]
          }),
        password: new FormControl(
          '',
          {
            validators:
              [
                Validators.required,
                Validators.pattern(/[0-9a-zA-Z]{6}/)
              ]
          })
      });

  }

  onSubmit(){

    this.authService.login(
      {email: this.loginForm.value.email,
       password: this.loginForm.value.password
      });

  }

  ngOnDestroy(){

    this.loadingSubscription.unsubscribe();

  }

}