import { Component, OnInit } from '@angular/core';
import { BorrowService } from 'src/app/services/borrow.service';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase';


@Component({
  selector: 'app-borrow',
  templateUrl: './borrow.component.html',
  styleUrls: ['./borrow.component.css']
})
export class BorrowComponent implements OnInit {
  userId: string;

  constructor(private service: BorrowService,
    private firestore: AngularFirestore) { }

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
      owner: '',
      date: '',
      borrower:firebase.auth().currentUser.uid,
    }
  }
 
  onSubmit(form: NgForm) {
    let data = Object.assign({}, form.value);
    delete data.id;
    if (form.value.id == null)
      this.firestore.collection('borrow').add(data);
    else
      this.firestore.doc('borrow/' + form.value.id).update(data);
    this.resetForm(form);
  }

}
