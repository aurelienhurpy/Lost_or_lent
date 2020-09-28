import { Injectable } from '@angular/core';
import { Objet } from './objet.model';
import { Subscription, Subject } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import * as firebase from 'firebase';


@Injectable({
  providedIn: 'root'
})
export class ObjetService {
    
  formData: Objet;
  borrowedobjet = new Subject<Objet[]>();
  private firebaseSubscription:Subscription[] = [];
  userId: string;
  
  constructor(private db:AngularFirestore,private firestore: AngularFirestore) {}

  getObjets() {
    // code version html
    this.userId = firebase.auth().currentUser.uid
    return this.firestore.collection('objets',ref=>ref.where('owner','==',this.userId))
    .snapshotChanges()

        // // code si utilisation de  MatTableDataSource
    //  this.userId = firebase.auth().currentUser.uid
    //  this.firebaseSubscription.push(this.db.collection('objets',ref=>ref.where('owner','==',this.userId))
    //  .valueChanges()
    //  .subscribe((objet:Objet[])=>{
    //      this.borrowedobjet.next(objet);
  
    //  }));
    

  }
  // a commenter pour la version html
  // cancelSubscription(){

  //   this.firebaseSubscription.forEach(sub=> sub.unsubscribe());

  // }
}

