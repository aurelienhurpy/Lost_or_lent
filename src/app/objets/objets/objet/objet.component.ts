import { Component, OnInit } from '@angular/core';
import { ObjetService } from 'src/app/services/objet.service';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase';


@Component({
  selector: 'app-objet',
  templateUrl: './objet.component.html',
  styleUrls: ['./objet.component.css']
})
export class ObjetComponent implements OnInit {
  userId: string;
  
  constructor(private service: ObjetService,
    private firestore: AngularFirestore) {}

   ngOnInit() {
 
    this.resetForm();
    this.userId = firebase.auth().currentUser.uid
  }
 
  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.service.formData = {
      id: null,
      name: '',
      title: '',
      borrower: '',
      date: '',
      owner:firebase.auth().currentUser.uid,
    }
  }
 
  onSubmit(form: NgForm) {
    let data = Object.assign({}, form.value);
    delete data.id;
    if (form.value.id == null)
      this.firestore.collection('objets').add(data);
    else
      this.firestore.doc('objets/' + form.value.id).update(data);
    this.resetForm(form);
  }

}
