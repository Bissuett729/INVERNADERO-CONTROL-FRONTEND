import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';

// SERVICES
import * as SERVICE from '../../shared/services'
// INTERFACES
import * as I from '../interface'

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, RouterLink, ReactiveFormsModule]
})
export class RegisterPage{

  private http_service = inject(SERVICE.HttpRequestService);
  private sweetAlert2_service = inject(SERVICE.SweetAlert2Service);

  public registerForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }  

  public registerUser = async () => {
    const { name, email, password } = this.registerForm.value;

    (await this.http_service.request_post(`/invernadero/v1/user/create-user`, { name, email, password, active: true })).subscribe((resp: I.USER_RESPONSE_INTERFACE) => {
      console.log('Usuario creado con exito', resp);
      this.sweetAlert2_service.showMessage('Usuario creado con exito!')
    }, (error:any) => {
      this.sweetAlert2_service.showMessage(error?.error?.message, 'error');
    })
  }
}
