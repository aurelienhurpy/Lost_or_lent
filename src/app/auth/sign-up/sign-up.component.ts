import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/AuthService';
import { UIService } from 'src/app/services/UIService';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit, OnDestroy {

  maxDate;
  isLoading:boolean = false;

  private loadingSubscription:Subscription;

  constructor(private authService:AuthService, private uiService:UIService) { }

  ngOnInit() {

    this.loadingSubscription = this.uiService.loadingStateChanges.subscribe(
      isLoading =>{
        this.isLoading = isLoading
      }
    );

    this.maxDate = new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear()-18);

  }

  onSubmit(form:NgForm){

       this.authService.registerUser({
      email: form.value.email,
      password: form.value.password
    });

  }

  ngOnDestroy(){

    this.loadingSubscription.unsubscribe();

  }

}