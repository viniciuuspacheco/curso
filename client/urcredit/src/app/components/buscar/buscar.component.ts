import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadService } from 'src/app/tools/load/load.service';
import { RequestService } from 'src/app/services/request.service';
import { AlertsService } from 'src/app/tools/alerts/alerts.service';
@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {
  dados = [];
  buscarForm: FormGroup;
  editarForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private request: RequestService, private load: LoadService, private alert: AlertsService) { }

  ngOnInit(): void {

    this.buscarForm = this.formBuilder.group({
      cpf: ['', Validators.required],
    });

    this.editarForm = this.formBuilder.group({
      nome: ['', Validators.required],
      cpf: ['', Validators.required],
      valor: ['', Validators.required],
      id: ['']
    });
  }


  buscar() {
    this.load.carregando(true);
    this.request.buscarDividas(this.buscarForm.value).subscribe(res => {
      this.dados = res.data;
      this.load.carregando(false);
    });
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
      this.buscar();
    })
  }

  apagar(dado) {
    this.request.apagarDividas(dado).subscribe(res => {
      this.alert.adicionar(res.message);
      this.buscar();
    })
  }

  validar(formulario) {
    return formulario.status === 'VALID' ? false : true;
  }
}

