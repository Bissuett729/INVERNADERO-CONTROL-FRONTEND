import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-sistema-riego',
  templateUrl: './sistema-riego.page.html',
  styleUrls: ['./sistema-riego.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class SistemaRiegoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
