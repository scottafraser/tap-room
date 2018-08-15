import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from '../models/keg.model';

@Component({
  selector: 'app-edit-tap',
  templateUrl: './edit-tap.component.html',
  styleUrls: ['./edit-tap.component.css']
})
export class EditTapComponent {
  @Input() childSelectedKeg: Keg;
  @Output() clickedDone = new EventEmitter();

  finishedEditing() {
    this.clickedDone.emit();
  }

}
