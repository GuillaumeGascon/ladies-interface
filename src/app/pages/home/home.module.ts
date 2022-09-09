import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared.module';
import { SwiperModule } from 'swiper/angular';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    SharedModule,
    SwiperModule
  ],
  declarations: [HomePage]
})
export class HomePageModule { }
