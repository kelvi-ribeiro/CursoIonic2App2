import { ComponentsModule } from './../components/components.module';
import { MenuSettingsPageModule } from './../pages/menu-settings/menu-settings.module';

import { AboutPage } from './../pages/about/about';

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CustomHeaderComponent } from '../components/custom-header/custom-header';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AboutPage,
    CustomHeaderComponent

  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    MenuSettingsPageModule,

    IonicModule.forRoot(MyApp,{
      platforms:{
        ios:{
          menuType:'reveal'
        },
        android:{
          menuType:'push'
        },
        windows:{
          menuType:'overlay'
        }
      }
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AboutPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
