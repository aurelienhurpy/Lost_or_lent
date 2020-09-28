import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { ObjetService } from './services/objet.service';
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import { WelcomeComponent } from './navigation/welcome/welcome.component';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout'
import { AngularFireAuthModule } from 'angularfire2/auth';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthService } from './services/AuthService';
import { UIService } from './services/UIService';





import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ObjetsComponent } from './objets/objets/objets.component';
import { ObjetComponent } from './objets/objets/objet/objet.component';
import { ObjetListComponent } from './objets/objets/objet-list/objet-list.component';
import { BorrowedComponent } from './objets/borrowed/borrowed.component';
import { BorrowComponent } from './objets/borrowed/borrow/borrow.component';
import { BorrowListComponent } from './objets/borrowed/borrow-list/borrow-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { MAT_DATE_LOCALE, MatPaginatorIntl } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    ObjetsComponent,
    ObjetComponent,
    ObjetListComponent,
    BorrowedComponent,
    BorrowComponent,
    BorrowListComponent,
    WelcomeComponent,
    HeaderComponent,
    SidenavListComponent,
    SignUpComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    MaterialModule,
    FormsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AngularFireAuthModule
  ],
  providers: [AuthService,ObjetService,UIService,{provide: MAT_DATE_LOCALE, useValue: 'fr-FR'},{ provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: { useUtc: true } }],
  bootstrap: [AppComponent]
})
export class AppModule { }
