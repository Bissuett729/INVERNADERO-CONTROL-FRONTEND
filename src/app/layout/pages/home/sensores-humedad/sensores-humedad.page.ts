import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-sensores-humedad',
  templateUrl: './sensores-humedad.page.html',
  styleUrls: ['./sensores-humedad.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class SensoresHumedadPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
