import { Component, Output, EventEmitter } from '@angular/core';
import { Keg } from '../models/keg.model';

@Component({
  selector: 'app-new-tap',
  templateUrl: './new-tap.component.html',
  styleUrls: ['./new-tap.component.css']
})
export class NewTapComponent {
  @Output() sendKeg = new EventEmitter();

  submitForm(name: string, brand: string, style: string, price: number, ABV: number){
    let newKeg: Keg = new Keg(name, brand, style, price, ABV);
     this.sendKeg.emit(newKeg);
  }


}
