import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

export interface TopMenu {
  id: number;
  title: string,
  link?: string;
}

@Component({
  selector: 'app-scrollable-tab',
  templateUrl: './scrollable-tab.component.html',
  styleUrls: ['./scrollable-tab.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScrollableTabComponent implements OnInit {

  @Input() selectedIndex = -1;
  title = 'pinduoduo';
  @Input() menus: TopMenu[] = []
  @Output() tabSelected = new EventEmitter();

  constructor() { }
  ngOnInit() {
    console.log(this)
  }


  handleSelection(index: number) {
    this.selectedIndex = index
    this.tabSelected.emit(this.menus[this.selectedIndex])
  }

}
