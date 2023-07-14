import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-wrapper',
  templateUrl: './form-wrapper.component.html',
  styleUrls: ['./form-wrapper.component.less'],
})
export class FormWrapperComponent {
  http: HttpClient = inject(HttpClient);
  router: Router = inject(Router);
  email: string = '';
  userHoroscope: string = '';
  birthDate: Date = new Date();
  submitForm() {
    this.http.post('http://127.0.0.1:8080/api/postUser',{
      email: this.email,
      userHoroscope: this.userHoroscope,
      birthDate: this.birthDate,
    }, {responseType: "text"}).subscribe((data) => {
      console.log(data);
      // redirect to user to url /horoscope/{userHoroscope}
      this.router.navigate(['/horoscope', this.userHoroscope]);

    });
  }
}
