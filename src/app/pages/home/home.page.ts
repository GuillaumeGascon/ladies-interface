import { Component, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'home-page',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {

  mainSwiperConfig: SwiperOptions = {
    initialSlide: 0,
    slidesPerView: 3,
    slidesPerGroup: 1,
    spaceBetween: 32,
    grabCursor: true,
    slidesOffsetAfter: 432
  }

  secondSwiperConfig: SwiperOptions = {
    initialSlide: 0,
    slidesPerView: 3,
    slidesPerGroup: 1,
    spaceBetween: 40,
    grabCursor: true,
    direction: 'vertical',
    slidesOffsetAfter: 432
  }

  constructor(
  ) {  }

  ngOnInit(): void {
    console.log('test');
  }

}
