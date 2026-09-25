export class Jugador {
  constructor(nombre, nivel) {
    this.nombre = nombre;
    this.nivel = nivel;
    this.experiencia = 0;
    this.expNivel = 100;
  }
  informacion() {
    return `${this.nombre} ha alcanzado el Nivel ${this.nivel}!`;
  }
  ganarExperiencia(puntos) {
    this.experiencia = this.experiencia + puntos;
    console.log(`${this.nombre} has ganado ${puntos} de experiencia!`);
    this.subirNivel();
    console.log(this.informacion());
  }

  subirNivel() {
    if (this.experiencia >= this.expNivel) {
      this.experiencia = this.experiencia - this.expNivel;
      this.nivel++;
    }
  }
}