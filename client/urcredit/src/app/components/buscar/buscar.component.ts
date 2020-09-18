import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {
  dados = [];
  buscarForm: FormGroup;
  editarForm: FormGroup;
  constructor(private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.buscarForm = this.formBuilder.group({
      cpf: [''],
    });

    this.editarForm = this.formBuilder.group({
      nome: [''],
      cpf: [''],
      valor: [''],
      id: ['']
    });
  }
  buscar() {
    this.api.buscar(this.buscarForm.value);
    this.dados = this.api.debitosBusca;
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
