import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from '../models/keg.model';


@Component({
  selector: 'app-tap-list',
  templateUrl: './tap-list.component.html',
  styleUrls: ['./tap-list.component.css']
})
export class TapListComponent {
  @Input() childKegList: Keg[];
  @Output() clickSender = new EventEmitter();


  editButtonClicked(kegToEdit: Keg) {
    this.clickSender.emit(kegToEdit);
  }

  deleteButtonClicked(kegToDelete: Keg) {
    const index = this.childKegList.indexOf(kegToDelete)
    this.childKegList.splice(index, 1);
  }

  pourPints(currentKeg) {
    console.log('cheers!');
    currentKeg.pints --
    return currentKeg.pints
  }

  kegStatus(pints) {
    let percentLeft = (pints/124)*100
    return percentLeft
  }

  filterBySale: string = "saleKegs";

  onChange(optionFromMenu) {
    this.filterBySale = optionFromMenu;
  }

  toggleSale(clickedKeg: Keg, setSale: boolean) {
    if (clickedKeg.onSale == true){
      clickedKeg.price ++
    } else {
      clickedKeg.price --
    }
    clickedKeg.onSale= setSale;
  }


  styleColor(currentKeg) {
    if (currentKeg.style === 'IPA') {
      return "bg-success";
    } else if (currentKeg.style === 'Stout') {
      return "bg-info";
    } else if (currentKeg.style === 'NWPA') {
      return "bg-primary";
    } else if (currentKeg.style === 'Pilsner') {
      return "bg-danger";
    }
  }

}
