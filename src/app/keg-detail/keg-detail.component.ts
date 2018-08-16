import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Keg } from '../models/keg.model';

@Component({
  selector: 'app-keg-detail',
  templateUrl: './keg-detail.component.html',
  styleUrls: ['./keg-detail.component.css']
})
export class KegDetailComponent implements OnInit {
  kegId: number = null;

  constructor(private route: ActivatedRoute, private location: Location) {}


  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.albumId = parseInt(urlParameters['id']);
    });  
  }
}
