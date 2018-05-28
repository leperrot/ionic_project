import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RandolandDetail } from './randoland-detail';
import { CurrentRando } from '../current-rando'

@NgModule({
  declarations: [
    RandolandDetail,
  ],
  imports: [
    IonicPageModule.forChild(RandolandDetail),
  ],
})
export class RandolandDetailModule {}

