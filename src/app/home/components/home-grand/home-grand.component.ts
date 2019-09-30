import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {fromEvent, Subscription} from 'rxjs';

@Component({
  selector: 'app-home-grand',
  templateUrl: './home-grand.component.html',
  styleUrls: ['./home-grand.component.scss']
})
export class HomeGrandComponent implements OnInit, OnDestroy {

  obj = { productId: 2, productName: 'xx手机', model: 's', type: '全面屏' }
  @ViewChild('inputRef', {static: true}) inputRef: ElementRef;
  values = ''
  startDate = new Date(2019, 6, 1);
  futureDate = new Date(2019, 6, 2)
  constructor() { }
  date: Date;
  sub: Subscription;
  ngOnInit() {
    this.date = this.minusDays(new Date(), 30);

    this.sub = fromEvent(this.inputRef.nativeElement, 'input')
      .subscribe((ev: any) => {
        console.log(ev.target.value)
        this.values = ev.target.value
      })
  }

  minusDays(date: Date, days: number) {
    const result = new Date(date);
    result.setDate(result.getDate() - days)
    return result
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
