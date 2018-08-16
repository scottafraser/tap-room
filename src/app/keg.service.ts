import { Injectable } from '@angular/core';
import { Keg } from './models/keg.model';
import { KEGS } from './mock-Kegs';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';



@Injectable()
export class KegService {

  constructor() { }

  getKegs() {
    return KEGS;
  }

  getKegById(kegId: number){
    for (var i = 0; i <= KEGS.length - 1; i++) {
      if (KEGS[i].id === kegId) {
        return KEGS[i];
      }
    }
  }

}