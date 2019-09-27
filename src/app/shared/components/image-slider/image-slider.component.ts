import {
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
  AfterViewInit,
  Renderer2,
  OnDestroy,
  HostListener
} from '@angular/core';

export interface ImageSlider {
  imgUrl: string;
  link: string;
  caption: string;
}

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss']
})
export class ImageSliderComponent implements OnInit, AfterViewInit, OnDestroy {

  @Input() sliders: ImageSlider[] = [];
  @Input() sliderHerght = '160px';
  @Input() intervalBySeconds = 2;
  selectedIndex = 0;
  intervalId;
  @ViewChild('imageSlider', { static: true }) imageSlider: ElementRef;
  constructor(
    private rd2: Renderer2
  ) { }

  ngOnInit() {
    console.log('imageSlider', this.imageSlider)
  }
  setPropertys(index: number) {
    this.rd2.setProperty(
      this.imageSlider.nativeElement,
      'scrollLeft', (this.getIndex(index)) *
      this.imageSlider.nativeElement.scrollWidth / this.sliders.length
    )
  }
  selectedSlide(idx: number): void {
    this.setPropertys(idx)
    this.selectedIndex = idx
  }

  ngAfterViewInit(): void {
    this.intervalId = setInterval(() => {
      this.setPropertys(++this.selectedIndex)
    }, this.intervalBySeconds * 1000)
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId)
  }

  getIndex(idx: number): number {
    return idx >= 0 ? idx % this.sliders.length
      : this.sliders.length - (Math.abs(idx) % this.sliders.length)
  }

  handleScroll(ev) {
    const ratio = (ev.target.scrollLeft * this.sliders.length) / ev.target.scrollWidth;
    this.selectedIndex = Math.round(ratio);
  }

  // @HostListener('mouseover')
  // onMouseover() {
  //   clearInterval(this.intervalId)
  //   console.log('鼠标移入')
  // }
  //
  // @HostListener('mouseout')
  // onMouseout() {
  //   this.intervalId = setInterval(() => {
  //     this.setPropertys(++this.selectedIndex)
  //   }, this.intervalBySeconds * 1000)
  // }

}
