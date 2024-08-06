import { Injectable } from '@angular/core';

import Swal, { SweetAlertIcon, SweetAlertPosition } from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})
export class SweetAlert2Service {

  constructor() { }

  public showMessage = (title: string, icon: SweetAlertIcon = 'success', position: SweetAlertPosition = 'center', timer: number = 1500) => {
    return Swal.fire({
      position,
      icon,
      title,
      showConfirmButton: false,
      timer
    });
  }
}
