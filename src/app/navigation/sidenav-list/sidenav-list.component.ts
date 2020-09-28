import { Component, OnInit,EventEmitter, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/AuthService';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit {

  @Output() closeSidenav = new EventEmitter<void>();
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

  onClose(){

    this.closeSidenav.emit();

  }

  ngOnDestroy(){

    this.authSubscription.unsubscribe();

  }

  onLogout(){

    this.onClose();
    this.authService.logout();

  }

}
