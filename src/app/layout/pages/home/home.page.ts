import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import * as SECTION from './index'

@Component({
  selector: 'app-home',
  imports: [CommonModule, SECTION.IluminacionPage, SECTION.SensoresHumedadPage, SECTION.SistemaRiegoPage, SECTION.VentiladoresPage],
  standalone: true,
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  public sectionActive: string = 'sensoresHumedad';

  public setSection = (section: string) => {
    this.sectionActive = section;
  }
}
