import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {
  dados = [];
  constructor() { }

  ngOnInit(): void {
    for (let i = 1; i <= 2; i++) {
      this.dados.push({ id: i, nome: Math.random().toString(36).substring(7), cpf: Math.floor(Math.random() * 99999999999 + 1), divida: Math.floor(Math.random() * 99999999999 + 1) });
    }
  }
  editar(dado) {
    console.log(dado);
  }
  apagar(dado) {
    console.log(dado);

  }
}
