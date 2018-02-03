import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the CaptalizePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'captalize',
})
export class CaptalizePipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string, args) {
    let words:string[] = value.split(' ');
    let output:string = '';
    words.forEach((value:string,index:number,words:string[])=>{
      output  += value.charAt(0).toUpperCase + value.substr(1).toLowerCase() + ' '

    })
    return output;
  }
}
