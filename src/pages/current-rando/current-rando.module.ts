import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CurrentRando } from './current-rando';

@NgModule({
  declarations: [
    CurrentRando,
  ],
  imports: [
    IonicPageModule.forChild(CurrentRando),
  ],
})
export class CurrentRandoModule {}
