import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IonButtons, IonContent, IonHeader, IonMenu, IonMenuButton, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    IonMenu, 
    IonHeader, 
    IonToolbar,
    IonTitle,
    IonContent,
    IonButtons,
    IonMenuButton,
    RouterOutlet
  ],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {}
