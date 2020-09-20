import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RequestService } from 'src/app/services/request.service';
import { AlertsService } from 'src/app/tools/alerts/alerts.service';
import { LoadService } from 'src/app/tools/load/load.service';
@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {
  cadastrarForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private request: RequestService, private load: LoadService, private alert: AlertsService, private router: Router) { }

  ngOnInit(): void {
    this.cadastrarForm = this.formBuilder.group({
      nome: ['', Validators.required],
      cpf: ['', Validators.required],
      divida: ['', Validators.required],
    });
  }
  salvar() {
    this.request.cadastrarDividas(this.cadastrarForm.value).subscribe(res => {
      this.alert.adicionar(res.message);
      this.router.navigate(['main/dividas']);
    })
  }
  validar(formulario) {
    return formulario.status === 'VALID' ? false : true;
  }
}
