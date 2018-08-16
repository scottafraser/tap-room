import { Component } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})

export class ProgressBarComponent {
  color = 'primary';
  mode = 'determinate';
  value = 50;
  bufferValue = 75;
}