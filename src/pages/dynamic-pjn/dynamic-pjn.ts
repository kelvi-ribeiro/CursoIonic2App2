import { GithubProvider} from './../../providers/github/github';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DynamicPjnPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dynamic-pjn',
  templateUrl: 'dynamic-pjn.html',
})
export class DynamicPjnPage {
  public users;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public gitProvider:GithubProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DynamicPjnPage');
    this.gitProvider.getUsers()
    .subscribe((users:[{}])=>{
      console.log(users);

      this.users = users

    });
  }

  onIncrement(){
    console.log(this.gitProvider.increment());


  }

}
