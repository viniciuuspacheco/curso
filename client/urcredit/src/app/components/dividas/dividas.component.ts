import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-dividas',
  templateUrl: './dividas.component.html',
  styleUrls: ['./dividas.component.css']
})
export class DividasComponent implements OnInit {
  dados: any;
  constructor(private api: ApiService) { }

  ngOnInit(): void {


    this.dados = this.api.listaDividas();
    console.log(this.dados);





  }
  editar(dado) {
    console.log(dado);
  }
  apagar(dado) {
    console.log(dado);

  }
}
