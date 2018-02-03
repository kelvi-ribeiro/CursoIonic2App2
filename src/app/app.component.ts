import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ToastController } from 'ionic-angular';

import { HomePage } from '../pages/home/home';
import { AboutPage } from '../pages/about/about';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav:Nav;
  pages:[{title:string,component:any}];
  rootPage:any = HomePage;

  constructor(platform: Platform,
              statusBar: StatusBar,
              splashScreen: SplashScreen,
              private toastCtrl:ToastController) {
    this.pages = [
      {title:'Home page', component:HomePage},
      {title:'About Page', component:AboutPage}
    ]
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  presentToast(message) {
    let toast = this.toastCtrl.create({
      message: `${message}`,
      duration: 1,
      position: 'middle'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }
  openPage(page:any):void{
    // this.rootPage = page.component;
    this.nav.setRoot(page.component);


  }

  onOpen():void{
      this.presentToast('O Menu foi aberto')

  }
  onClose():void{

    this.presentToast('O Menu fechado')

  }
  onDrag():void{

    this.presentToast('O Menu arrastado')

  }
}

