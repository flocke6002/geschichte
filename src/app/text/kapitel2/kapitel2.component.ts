import { Component } from '@angular/core';
import {HauptcharComponent} from "../../hauptcharakter/hauptchar.component";

@Component({
  selector: 'app-kapitel2',
  templateUrl: './kapitel2.component.html',
  styleUrls: ['./kapitel2.component.css']
})
export class Kapitel2Component {
  constructor(public hauptCharakter: HauptcharComponent) {
  }
}
