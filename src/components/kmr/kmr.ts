import { Component } from '@angular/core';

/**
 * Generated class for the KmrComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'kmr',
  templateUrl: 'kmr.html'
})
export class KmrComponent {

  text: string;

  constructor() {
    console.log('Hello KmrComponent Component');
    this.text = 'Hello World';
  }

}
