import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log(this.navParams)
    console.log(this.navParams.get('type'))
    console.log(this.navParams.get('type'))
    this.navParams.data['message']();
    console.log(this.navParams.get('year'))
  }

  pushPage():void{
    this.navCtrl.push(ContactPage)
  }
  popPage():void{
    this.navCtrl.pop();
  }

}
