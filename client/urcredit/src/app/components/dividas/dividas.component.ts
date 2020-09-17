import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-dividas',
  templateUrl: './dividas.component.html',
  styleUrls: ['./dividas.component.css']
})
export class DividasComponent implements OnInit {
  dados: [];
  editarForm: FormGroup;

  constructor(private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.editarForm = this.formBuilder.group({
      nome: [''],
      cpf: [''],
      valor: [''],
      id: ['']
    });

    this.api.listaDividas();
    setInterval(() => {
      this.dados = this.api.debitos;
    }, 500);

  }
  selecionado(dado) {
    this.editarForm.get('nome').setValue(dado.name);
    this.editarForm.get('cpf').setValue(dado.cpf);
    this.editarForm.get('valor').setValue(dado.value);
    this.editarForm.get('id').setValue(dado.id);
  }

  editar() {
    this.api.editar(this.editarForm.value);
  }

  apagar(dado) {
    this.api.apagar(dado.id)
  }
}
