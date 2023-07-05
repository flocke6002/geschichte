import { Component } from '@angular/core';
import {AppComponent} from "../../app.component";
import {HauptcharComponent} from "../../hauptcharakter/hauptchar.component";

@Component({
  selector: 'app-prolog',
  templateUrl: './prolog.component.html',
  styleUrls: ['./prolog.component.css']
})
export class PrologComponent {
  constructor(public hauptCharakter: HauptcharComponent) {
  }


}
