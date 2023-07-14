import { HttpClient } from '@angular/common/http';
import { Component, Input, OnChanges, SimpleChanges, inject } from '@angular/core';
import {HttpParams } from '@angular/common/http';
@Component({
  selector: 'app-content-wrapper',
  templateUrl: './content-wrapper.component.html',
  styleUrls: ['./content-wrapper.component.less']
})
export class ContentWrapperComponent implements OnChanges{
  
  @Input() userHoroscope: string = '';

  readingTypes: string [] = ['health', 'love', 'money'];
  selectedReadingType: string = 'health';
  httpClient: HttpClient = inject(HttpClient);
  horoscopeReading: string = '';
  isLoading: boolean = false;
  
  ngOnChanges(changes: SimpleChanges): void {
    this.getReading();
  }

  getReading(){
    console.log(this.selectedReadingType, this.userHoroscope);
    let params = new HttpParams().set('readingType', this.selectedReadingType).set('horoscopeType', this.userHoroscope);
    this.isLoading = true;
    this.httpClient.get<any>(`https://fsss-astro-ai.azurewebsites.net/api/getReadingsFor`, { params: params }).subscribe((data) => {
      this.horoscopeReading = data.reading;
      this.isLoading = false;
    }); 
  }
}