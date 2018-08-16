import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Keg } from '../models/keg.model';
import { KegService } from '../keg.service';

@Component({
  selector: 'app-keg-detail',
  templateUrl: './keg-detail.component.html',
  styleUrls: ['./keg-detail.component.css'],
  providers: [KegService]
})
export class KegDetailComponent implements OnInit {
  kegId: number;
  kegToDisplay: Keg;

  constructor(
    private route: ActivatedRoute, 
    private location: Location,
    private kegService: KegService) {}


  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.kegId = parseInt(urlParameters['id']);
    });  
    this.kegToDisplay = this.kegService.getKegById(this.kegId)
  }
}
