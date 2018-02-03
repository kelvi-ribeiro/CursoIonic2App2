import { HttpModule } from '@angular/http';
import { DynamicPjnPageModule } from './../pages/dynamic-pjn/dynamic-pjn.module';
import { BrowserModule } from '@angular/platform-browser';
import { KmrComponent } from './../components/kmr/kmr';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BackgroundGreenDirective } from '../directives/background-green/background-green';
import { GithubProvider } from '../providers/github/github';
import { PipesModule } from '../pipes/pipes.module';


@NgModule({
  declarations: [
    BackgroundGreenDirective,
    MyApp,
    HomePage,
    ListPage,
    KmrComponent

  ],
  imports: [
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    PipesModule,
    DynamicPjnPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GithubProvider
  ]
})
export class AppModule {}
