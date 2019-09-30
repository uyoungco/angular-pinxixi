import { Injectable } from '@angular/core';
import { TopMenu } from '../../shared/components/scrollable-tab';
import { Channel } from '../../shared/components/horizontal-grid';
import { ImageSlider } from '../../shared/components/image-slider';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(
    private http: HttpClient
  ) { }

  TopMenus: TopMenu[] = []

  channels: Channel[] = []

  imageSliders: ImageSlider[] = []

  getTabs() {
    return this.http.get<TopMenu[]>(
      `${environment.baseUrl}/tabs`
    );
  }
  getChannels() {
    return this.http.get<Channel[]>(
      `${environment.baseUrl}/channels`
    );
  }
  getBanners() {
    return this.http.get<ImageSlider[]>(
      `${environment.baseUrl}/banners`
      );
  }
}
