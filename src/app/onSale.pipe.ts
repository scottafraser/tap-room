import {Pipe, PipeTransform} from '@angular/core';
import { Keg } from './models/keg.model';

@Pipe({
    name: "onSale",
    pure: false
})

export class onSalePipe implements PipeTransform {

    transform(input: Keg[], status) {
        var output: Keg[] = [];
        if(status === "fullPricedKegs") {
          for (var i = 0; i < input.length; i++) {
            if (input[i].onSale === false) {
              output.push(input[i]);
            }
          }
          return output;
        } else if (status === "saleKegs") {
          for (var i = 0; i < input.length; i++) {
            if (input[i].onSale === true) {
              output.push(input[i]);
            }
          }
          return output;
        } else {
          return input;
        }
      }
    }