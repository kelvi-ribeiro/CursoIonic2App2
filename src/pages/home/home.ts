import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MenuSettingsPage } from './../menu-settings/menu-settings';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  onSettings():void{
    this.navCtrl.push(MenuSettingsPage)
  }

}
