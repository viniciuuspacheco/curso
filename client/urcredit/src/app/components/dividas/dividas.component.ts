import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RequestService } from 'src/app/services/request.service';
import { AlertsService } from 'src/app/tools/alerts/alerts.service';
import { LoadService } from 'src/app/tools/load/load.service';
@Component({
  selector: 'app-dividas',
  templateUrl: './dividas.component.html',
  styleUrls: ['./dividas.component.css']
})
export class DividasComponent implements OnInit {
  dados: [];
  editarForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private request: RequestService, private load: LoadService, private alert: AlertsService) { }

  ngOnInit(): void {
    this.editarForm = this.formBuilder.group({
      nome: ['', Validators.required],
      cpf: ['', Validators.required],
      valor: ['', Validators.required],
      id: ['']
    });

    this.listaDividas();


  }

  listaDividas() {
    this.load.carregando(true);
    this.request.getDividas().subscribe(res => {
      this.dados = res.data
      this.load.carregando(false);

    })
  }
  selecionado(dado) {
    this.editarForm.get('nome').setValue(dado.name);
    this.editarForm.get('cpf').setValue(dado.cpf);
    this.editarForm.get('valor').setValue(dado.value);
    this.editarForm.get('id').setValue(dado.id);
  }

  editar() {
    this.request.editarDividas(this.editarForm.value).subscribe(res => {
      this.alert.adicionar(res.message);
      this.listaDividas();
    })
  }

  apagar(dado) {
    this.request.apagarDividas(dado).subscribe(res => {
      this.alert.adicionar(res.message);
      this.listaDividas();
    })
  }
  validar(formulario) {
    return formulario.status === 'VALID' ? false : true;
  }
}
