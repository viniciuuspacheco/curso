import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadService {
  mostrar = false;
  constructor() { }

  carregando(valor) {
    this.mostrar = valor;
    console.log(this.mostrar);
  }
}
