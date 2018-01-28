import { ContactPage } from './../contact/contact';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  pushPage():void{
    this.navCtrl.push(ContactPage,{
    type:'push',
    course:'Ionic 2',
    year:2017,
    messeage: () => {alert('Se ferrou')}
    });
  }

  setRoot():void{
    this.navCtrl.setRoot(ContactPage,{
      type:'setRoot'
    });
  }

}
