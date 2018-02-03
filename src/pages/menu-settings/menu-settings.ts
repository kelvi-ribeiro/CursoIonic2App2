import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NavControllerBase } from 'ionic-angular/navigation/nav-controller-base';
import { MenuController } from 'ionic-angular/components/app/menu-controller';
import { Menu } from 'ionic-angular/components/app/menu-interface';

/**
 * Generated class for the MenuSettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu-settings',
  templateUrl: 'menu-settings.html',
})
export class MenuSettingsPage {

  constructor(
          public navCtrl: NavController,
          public navParams: NavParams,
          public menuCtrl:MenuController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuSettingsPage');
  }

  ionViewDidEnter(){
    this.menuCtrl.enable(false,'menu3');

    this.menuCtrl
    .enable(true,'menu2')
    .open()
  //   this.menuCtrl.open()
  //   this.menuCtrl.toggle('menu3').then((opened:boolean)=>{
  //     console.log('Abriu?' , opened);

  //   }).catch(err=> console.log('Erro ao abrir menu 2:', err))

  }
  toggleMenu1Enable():void{
    let isEnabled:boolean = this.menuCtrl.isEnabled('menu1');
    this.menuCtrl.enable(!isEnabled,'menu');
  }
  menuConfigs():void{
    // console.log(this.menuCtrl.getMenus());
    let menus:Menu[] = this.menuCtrl.getMenus();
    menus.forEach((currentMenu:Menu,index:number,array:Menu[])=>{
      currentMenu.enable(false)
    })
    this.menuCtrl.get('menu3')
    .enable(true)
    .open()
    .then((opened:boolean)=>{
      console.log('Menu 3 aberto ?',opened);

    })
  }


}
