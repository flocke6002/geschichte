import { Component } from '@angular/core';

@Component({
  selector: 'app-hauptcharakter',
  templateUrl: './hauptchar.component.html',
  styleUrls: ['./hauptchar.component.css']
})
export class HauptcharComponent {
  constructor() {
  }

  name: string = "Flocke";
  alter: number = 20;
}
