import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormWrapperComponent } from './form-wrapper/form-wrapper.component';
import { ContentWrapperComponent } from './content-wrapper/content-wrapper.component';

const routes: Routes = [
  { path: '', component: FormWrapperComponent},
  { path: 'horoscope/:userHoroscope', component: ContentWrapperComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{bindToComponentInputs: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
