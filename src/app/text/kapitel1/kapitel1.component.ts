import { Component } from '@angular/core';
import {AppComponent} from "../../app.component";
import {HauptcharComponent} from "../../hauptcharakter/hauptchar.component";

@Component({
  selector: 'app-kapitel1',
  templateUrl: './kapitel1.component.html',
  styleUrls: ['./kapitel1.component.css']
})
export class Kapitel1Component {
  constructor(public hauptCharakter: HauptcharComponent) {
  }


}
