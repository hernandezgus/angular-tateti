import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tablero',
  templateUrl: './tablero.component.html',
  styleUrls: ['./tablero.component.css']
})
export class TableroComponent implements OnInit {
  fichas: string[];
  xEsSiguiente: boolean;
  ganador: string;

  constructor() { }

  ngOnInit(): void {
    this.nuevoJuego();
  }

  public get jugador(): string {
    return this.xEsSiguiente ? 'X' : 'O';
  }

  nuevoJuego() {
    this.fichas = Array(9).fill(null);
    this.xEsSiguiente = true;
    this.ganador = null;
  }

  hacerMovimiento(idx: number){
    if (!this.fichas[idx]) {
      this.fichas.splice(idx, 1, this.jugador);
      this.xEsSiguiente = !this.xEsSiguiente;
      this.ganador = this.calcularGanador();
    }
  }

  calcularGanador() {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (const line of lines) {
      const [a, b, c] = line;
      if (this.fichas[a]
          && this.fichas[a] === this.fichas[b]
          && this.fichas[a] === this.fichas[c]) {
        return this.fichas[a];
      }
    }
    return null;
  }
}
