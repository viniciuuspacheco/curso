import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dividas',
  templateUrl: './dividas.component.html',
  styleUrls: ['./dividas.component.css']
})
export class DividasComponent implements OnInit {
  dados = [];
  constructor() { }

  ngOnInit(): void {
    for (let i = 1; i <= 100; i++) {
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
