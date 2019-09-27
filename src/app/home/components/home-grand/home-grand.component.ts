import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-grand',
  templateUrl: './home-grand.component.html',
  styleUrls: ['./home-grand.component.scss']
})
export class HomeGrandComponent implements OnInit {

  obj = { productId: 2, productName: 'xx手机', model: 's', type: '全面屏' }
  constructor() { }
  date: Date;
  ngOnInit() {
    this.date = this.minusDays(new Date(), 30);
  }

  minusDays(date: Date, days: number) {
    const result = new Date(date);
    result.setDate(result.getDate() - days)
    return result
  }
}
