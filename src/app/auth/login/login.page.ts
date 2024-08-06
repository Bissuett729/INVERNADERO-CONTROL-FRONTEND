import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { Router, RouterLink } from '@angular/router';

// SERVICES
import * as SERVICE from '../../shared/services'
// INTERFACES
import * as I from '../interface'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, RouterLink, ReactiveFormsModule]
})
export class LoginPage implements OnInit, OnDestroy {

  private http_service = inject(SERVICE.HttpRequestService);
  private sweetAlert2_service = inject(SERVICE.SweetAlert2Service);

  public authForm: FormGroup;

  constructor(private fb: FormBuilder, private Router: Router) {
    this.authForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }  
  
  public authentication = async () => {
    const { email, password } = this.authForm.value;
    console.log({ email, password });
    (await this.http_service.request_post(`/invernadero/v1/user/authentication`, { email, password })).subscribe((resp: I.USER_RESPONSE_INTERFACE) => {
      console.log('respuesta de autenticacion', resp);      
      this.sweetAlert2_service.showMessage('Usuario autenticado con exito!')
      this.Router.navigateByUrl('greenhouse/home');
      this.authForm.reset();
      localStorage.setItem('userID', resp?._id);
    }, (error: any) => {
      console.log('Error recibido', error);
      this.sweetAlert2_service.showMessage(error?.error?.message, 'error')
    })
  }
  
  ngOnInit(): void {
    localStorage.removeItem('userID');
  }

  ngOnDestroy(): void {
    localStorage.removeItem('userID');
  }
}
