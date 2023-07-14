import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-content-wrapper',
  templateUrl: './content-wrapper.component.html',
  styleUrls: ['./content-wrapper.component.less']
})
export class ContentWrapperComponent implements OnChanges{
  
  @Input() userHoroscope: string = '';

  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }
}