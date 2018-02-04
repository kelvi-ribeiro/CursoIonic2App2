import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-buttons',
  templateUrl: 'buttons.html',
})
export class ButtonsPage {

  myColor:string ='dark';
  isDanger:boolean = true;
  isRound:boolean = true;
  isClear:boolean = true;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ButtonsPage');
  }

  onClick(event:MouseEvent):void{
    console.log(event);

  }


}
