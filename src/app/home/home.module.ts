import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import {
  HomeContainerComponent,
  HomeDetaliComponent
} from './components';
import { HomeGrandComponent } from './components/home-grand/home-grand.component';

@NgModule({
  declarations: [
    HomeContainerComponent,
    HomeDetaliComponent,
    HomeGrandComponent
  ],
  imports: [
    SharedModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
