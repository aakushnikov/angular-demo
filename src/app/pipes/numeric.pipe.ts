import { Pipe, PipeTransform } from '@angular/core';
import { DecimalPipe } from '@angular/common';

@Pipe({
  name: 'numeric'
})
export class NumericPipe implements PipeTransform {
  transform(value: any): any {
    let len: number = value.toString().length;
    let dig: number = len % 3;
    // For number with counts of symbols divided by 3 (456, 999999 etc.)
    // action of len % 3 will set dig = 0
    // so we should set dig (number of outputing symbols) equals to 3
    // otherwise we'll get a result with floating point (0.14, 0.65 etc.)
    if (dig == 0) dig += 3;
    let denominator: number = Math.pow(10, len - dig);
    let result: string = (value/denominator).toString().substring(0, dig == 3 ? 3 : 4);
    // TODO with app locale
    switch(len)
    {
      case 1: result += ' '; break;
      case 2: result += ' '; break;
      case 3: result += ' '; break;
      case 4: result += ' тыс. '; break;
      case 5: result += ' тыс. '; break;
      case 6: result += ' тыс. '; break;
      case 7: result += ' млн. '; break;
      case 8: result += ' млн. '; break;
      case 9: result += ' млн. '; break;
      default: result += ' мрд. '; break;
    } 
    return result;
  }

}