// // version material
// import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
// import { Component, OnInit, ViewChild } from '@angular/core';
// import { ObjetService } from 'src/app/services/objet.service';
// import { Objet } from 'src/app/services/objet.model';
// import { MatTableDataSource, MatPaginator, MatSort, MatPaginatorIntl } from '@angular/material';
// import { Subscription } from 'rxjs';
// import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';

// @Component({
//   selector: 'app-objet-list',
//   templateUrl: './objet-list.component.html',
//   styleUrls: ['./objet-list.component.css']
// })
// export class ObjetListComponent implements OnInit {

//   objets$: AngularFireList<any[]>;

//   displayedColumns = ['name','title','borrower','date','action'];

//   list: Objet[];
//   dataSource = new MatTableDataSource<Objet>();
//   exChangedSubscription: Subscription;

//   @ViewChild (MatSort,{static: true }) sort:MatSort;
//   @ViewChild (MatPaginator,{static: true }) paginator:MatPaginator;

  

//   constructor(private service: ObjetService,private firestore: AngularFirestore,private af: AngularFireDatabase) { }

//     ngOnInit() {
//       this.exChangedSubscription = this.service.borrowedobjet.subscribe((objet:Objet[])=>{this.dataSource.data=objet;
//       });

//       this.service.getObjets();

//       this.objets$ = this.af.list('/objets');
//     }
   
//     onEdit(obj: Objet) {
//       this.service.formData = Object.assign({}, obj);
//     }

//      // onDelete(id: string) {
//     //   if (confirm("Etes-vous sûr de vouloir supprimer ?")) {
//     //     this.firestore.doc('objets/' + id).delete();
//     //   }
//     // }
   
//     // onDelete(data: { payload: { doc: { id: string; }; }; }) {
//     //   if (confirm("Etes-vous sûr de vouloir supprimer ?")) {
//     //     this.firestore.collection('objets')
//     //     .doc(data.payload.doc.id)
//     //     .delete();
//     //   }
//     // }
    

//   onDelete(objets: any): void {
//     console.log(objets)
//     console.log(objets.$key)
//     this.af.object('/objets/' + objets.$key).remove();
//   }
  

//     ngAfterViewInit(){

//       this.dataSource.sort = this.sort;
//       this.dataSource.paginator = this.paginator;
  
//     }

//     doFilter(filterValue:string){

//       this.dataSource.filter = filterValue.trim().toLowerCase();
  
//     }

// }

// export class MatPaginatorIntlCro extends MatPaginatorIntl {
//   itemsPerPageLabel = 'Items par page';
//   nextPageLabel     = 'Page Prochaine';
//   previousPageLabel = 'Page Précedente';
// }


// version html

import { AngularFirestore } from '@angular/fire/firestore';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ObjetService } from 'src/app/services/objet.service';
import { Objet } from 'src/app/services/objet.model';

@Component({
  selector: 'app-objet-list',
  templateUrl: './objet-list.component.html',
  styleUrls: ['./objet-list.component.css']
})
export class ObjetListComponent implements OnInit {

  list: Objet[];

  constructor(private service: ObjetService,
    private firestore: AngularFirestore) { }

    ngOnInit() {
      this.service.getObjets().subscribe(actionArray => {
        this.list = actionArray.map(item => {
          return {
            id: item.payload.doc.id,
            ...item.payload.doc.data()
          } as Objet;
        })
      });
    }
   
    onEdit(obj: Objet) {
      this.service.formData = Object.assign({}, obj);
    }
   
    onDelete(id: string) {
      console.log(id)
      if (confirm("Êtes-vous sûr de vouloir supprimer ?")) {
        this.firestore.doc('objets/' + id).delete();
      }
    }

}
