export class Jugador {
  constructor(nombre, nivel) {
    this.nombre = nombre;
    this.nivel = nivel;
  }
  informacion() {
    return `${this.nombre} ha alcanzado el Nivel ${this.nivel}!`;
  }
  subirNivel() {
    return this.nivel++;
  }
}
