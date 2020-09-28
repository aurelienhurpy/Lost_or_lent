import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/AuthService';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  

 @Output() sidenavToggle = new EventEmitter<void>();
 authSubscription:Subscription;
 isAuth:boolean = false;

  constructor(private authService:AuthService) { }

  ngOnInit() {

    this.authSubscription = this.authService.authChange.subscribe(
      authStatus => {
        // si authStatus = true
        this.isAuth = authStatus;
      });
  }

  onToggleSidenav(){

      this.sidenavToggle.emit();

  }

  onLogout(){

    this.authService.logout();

  }

  ngOnDestroy(){

    this.authSubscription.unsubscribe();

  }

}