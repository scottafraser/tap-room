import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Keg } from '../models/keg.model';
import { KegService } from '../keg.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';
import { KEGS } from '../mock-kegs';

@Component({
  selector: 'app-tap-list',
  templateUrl: './tap-list.component.html',
  styleUrls: ['./tap-list.component.css'],
  providers: [KegService]
})

export class TapListComponent  {

  constructor(private router: Router){}

  KEGS: Keg[] = [
    new Keg('Red Chair', 'Deschutes', 'NWPA', 6, 6.2, 1),
    new Keg('RPM', 'Boneyard', 'IPA', 6, 6.5, 2),
    new Keg('Pilsner', 'Pfriem', 'Pilsner', 5, 4.9, 3),
    new Keg('Cavatica', 'Fort George', 'Stout', 5, 8.8, 4)
  ];

  goToDetailPage(clickedKeg: Keg) {
    this.router.navigate(['taps', clickedKeg.id]);
  };


}
  



  // kegs: FirebaseListObservable<any[]>;

  // constructor(private kegService: KegService) {}
  // kegs: Keg[];

// }




//   ngOnInit(){
//     this.kegs = this.kegService.getKegs();
//   }

//   @Input() childKegList: Keg[];
//   @Output() clickSender = new EventEmitter();


//   editButtonClicked(kegToEdit: Keg) {
//     this.clickSender.emit(kegToEdit);
//   }

//   deleteButtonClicked(kegToDelete: Keg) {
//     const index = this.childKegList.indexOf(kegToDelete)
//     this.childKegList.splice(index, 1);
//   }

//   pourPints(currentKeg) {
//     if (currentKeg.pints > 0) currentKeg.pints --
//     return currentKeg.pints
//   }

//   kegStatus(pints) {
//     let percentLeft = (pints/124)*100
//     return percentLeft
//   }

//   filterBySale: string = "saleKegs";

//   onChange(optionFromMenu) {
//     this.filterBySale = optionFromMenu;
//   }

//   toggleSale(clickedKeg: Keg, setSale: boolean) {
//     if (clickedKeg.onSale === true){
//       clickedKeg.price ++
//     } else {
//       clickedKeg.price --
//     }
//     clickedKeg.onSale= setSale;
//   }


//   styleColor(currentKeg) {
//     if (currentKeg.style === 'IPA') {
//       return "bg-success";
//     } else if (currentKeg.style === 'Stout') {
//       return "bg-info";
//     } else if (currentKeg.style === 'NWPA') {
//       return "bg-primary";
//     } else if (currentKeg.style === 'Pilsner') {
//       return "bg-danger";
//     }
//   }

// }
