import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import {
  HomeContainerComponent,
  HomeDetaliComponent,
  HomeGrandComponent
} from './components';

import { HomeService } from './services';


@NgModule({
  declarations: [
    HomeContainerComponent,
    HomeDetaliComponent,
    HomeGrandComponent
  ],
  providers: [HomeService],
  imports: [
    SharedModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
