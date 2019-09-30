import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';

import { ImageSlider } from '../../../shared/components/image-slider';
import { Channel } from '../../../shared/components/horizontal-grid';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from '../../services';
import {filter, map} from 'rxjs/operators';
import {Observable, Subscription} from 'rxjs';

@Component({
  selector: 'app-home-detali',
  templateUrl: './home-detali.component.html',
  styleUrls: ['./home-detali.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeDetaliComponent implements OnInit, OnDestroy {

  selectedTabLink$: Observable<string>;
  imageSliders$: Observable<ImageSlider[]>;
  channels$: Observable<Channel[]>;
  sub: Subscription;
  constructor(
    private route: ActivatedRoute,
    private service: HomeService,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit() {
    // 轮播
    this.imageSliders$ = this.service.getBanners()
    // 轮播下
    this.channels$ = this.service.getChannels()

    this.selectedTabLink$ = this.route.paramMap
      .pipe(
        filter(params => params.has('tabLink')),
        map(params => params.get('tabLink'))
      )

    this.sub = this.route.queryParamMap.subscribe(params => {
      console.log('查询参数', params)
    })
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
