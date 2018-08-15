import { Component } from '@angular/core';
import { Keg } from './models/keg.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedKeg = null;

  masterKegList: Keg[] = [
    new Keg('Red Chair', 'Deschutes', 'NWPA', 6, 6.2),
    new Keg('RPM', 'Boneyard', 'IPA', 6, 6.5),
    new Keg('Pilsner', 'Pfriem', 'Pilsner', 5, 4.9),
    new Keg('Cavatica', 'Fort George', 'Stout', 5, 8.8)
  ];

  editKeg(clickedKeg) {
    this.selectedKeg = clickedKeg;
  }

  finishedEditing() {
    this.selectedKeg = null;
  }

  addKeg(newKeg: Keg) {
    this.masterKegList.push(newKeg);
  }

  
 

}
