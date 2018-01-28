import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LifecycleEventsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lifecycle-events',
  templateUrl: 'lifecycle-events.html',
})
export class LifecycleEventsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewCanEnter():Promise<any>{
  //  console.log('01 IonViewCanEnter Called');
  //  return true;
  return new Promise((resolve,reject)=>{
    console.log('Aguardando 2 segundos....');
    setTimeout(()=>{
      let number = Math.round(Math.random()*100);
      if(number % 2 == 0){
        resolve();
        console.log(`${number} - Autorizado`)
      }else{
        reject();
        console.log(`${number} - Não autorizado`)
      }
    },2000)
  })
  }
  ionViewDidLoad(){
   console.log('02 IonViewDidLoad called');

  }
  ionViewWillEnter(){
   console.log('03 ionViewWillEnter');

  }
  ionViewDidEnter(){
   console.log('04 IonViewDidEnter called');

  }
  ionViewCanLeave():Promise<any>{
    //  console.log('01 IonViewCanEnter Called');
    //  return true;
    return new Promise((resolve,reject)=>{
      console.log('Aguardando 2 segundos....');
      setTimeout(()=>{
        let number = Math.round(Math.random()*100);
        if(number % 2 == 0){
          resolve();
          console.log(`${number} - Autorizado`)
        }else{
          reject();
          console.log(`${number} - Não autorizado`)
        }
      },2000)
    })
    }
  ionViewWillLeave(){
    console.log('06 ionViewWillLeave Called');

  }
  ionViewDidLeave(){
   console.log('07 ionViewDidLeave Called');
     }
  ionViewWillUnload(){
   console.log('08 ionViewWillUnload Called');

  }
  onPop(){
    this.navCtrl.pop()
    .then(()=>{
      console.log('Page Popped!');

    }).catch(error =>{
      console.log('Saída não autorizada',error)
    })
  }
}
