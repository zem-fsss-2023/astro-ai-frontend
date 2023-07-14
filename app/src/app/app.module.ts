import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackgroundComponent } from './background/background.component';
import { FormWrapperComponent } from './form-wrapper/form-wrapper.component';
import { ContentWrapperComponent } from './content-wrapper/content-wrapper.component';
import { HoroscopeContentComponent } from './horoscope-content/horoscope-content.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    BackgroundComponent,
    FormWrapperComponent,
    ContentWrapperComponent,
    HoroscopeContentComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
