import { AngularFirestore } from '@angular/fire/firestore';
import { Component, OnInit } from '@angular/core';
import { BorrowService } from 'src/app/services/borrow.service';
import { Borrow } from 'src/app/services/borrow.model';

@Component({
  selector: 'app-borrow-list',
  templateUrl: './borrow-list.component.html',
  styleUrls: ['./borrow-list.component.css']
})
export class BorrowListComponent implements OnInit {

  list: Borrow[];

  constructor(private service: BorrowService,
    private firestore: AngularFirestore) { }

    ngOnInit() {
      this.service.getEmployees().subscribe(actionArray => {
        this.list = actionArray.map(item => {
          return {
            id: item.payload.doc.id,
            ...item.payload.doc.data()
          } as Borrow;
        })
      });
    }
   
    onEdit(bor: Borrow) {
      this.service.formData = Object.assign({}, bor);
    }
   
    onDelete(id: string) {
      if (confirm("Êtes-vous sûr de vouloir supprimer ?")) {
        this.firestore.doc('borrow/' + id).delete();
      }
    }

}
