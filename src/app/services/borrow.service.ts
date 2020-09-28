import { Injectable } from '@angular/core';
import { Borrow } from './borrow.model';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase';


@Injectable({
  providedIn: 'root'
})
export class BorrowService {

  formData: Borrow;
  userId: string;

  constructor(private firestore: AngularFirestore) { }

  getEmployees() {
    this.userId = firebase.auth().currentUser.uid
    return this.firestore.collection('borrow',ref=>ref.where('borrower','==',this.userId))
    .snapshotChanges();
  }

}
