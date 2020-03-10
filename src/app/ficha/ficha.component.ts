import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ficha',
  templateUrl: './ficha.component.html',
  styleUrls: ['./ficha.component.css']
})
export class FichaComponent implements OnInit {

  @Input() valor: "X" | "O";
  constructor() { }

  ngOnInit() {
  }

}