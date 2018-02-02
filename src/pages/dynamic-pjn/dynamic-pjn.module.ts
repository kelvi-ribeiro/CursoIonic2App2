import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DynamicPjnPage } from './dynamic-pjn';

@NgModule({
  declarations: [
    DynamicPjnPage,
  ],
  imports: [
    IonicPageModule.forChild(DynamicPjnPage),
  ],
})
export class DynamicPjnPageModule {}
