import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Randoland } from './randoland';

@NgModule({
  declarations: [
    Randoland,
  ],
  imports: [
    IonicPageModule.forChild(Randoland),
  ],
})
export class RandolandModule {}
