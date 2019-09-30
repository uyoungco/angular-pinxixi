import { Component, OnInit } from '@angular/core';
import { TopMenu } from '../../../shared/components/scrollable-tab';
import { Router } from '@angular/router';
import { HomeService } from '../../services';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.scss']
})
export class HomeContainerComponent implements OnInit {

  constructor(
    private router: Router,
    private service: HomeService
  ) {}

  selectedIndex = 0;
  title = 'pinduoduo';
  TopMenus$: Observable<TopMenu[]>;

  ngOnInit(): void {
    this.TopMenus$ = this.service.getTabs()
  }

  handleSelection(topMenu: TopMenu) {
    this.router.navigate(['home', topMenu.link]).then(r => {})
  }
}
