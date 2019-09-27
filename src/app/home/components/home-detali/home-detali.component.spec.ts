import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDetaliComponent } from './home-detali.component';

describe('HomeDetaliComponent', () => {
  let component: HomeDetaliComponent;
  let fixture: ComponentFixture<HomeDetaliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeDetaliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeDetaliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
