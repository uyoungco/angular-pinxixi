import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  HomeContainerComponent,
  HomeDetaliComponent
} from './home';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeContainerComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes) // { enableTracing: true }
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }


