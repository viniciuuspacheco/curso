import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { AlertsService } from 'src/app/tools/alerts/alerts.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  logarForm: FormGroup;
  cadastrarForm: FormGroup;
  recuperarForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private api: ApiService, private alert: AlertsService) {
  }

  ngOnInit(): void {
    this.logarForm = this.formBuilder.group({
      logarEmail: ['', Validators.email],
      logarSenha: ['', Validators.required]
    });
    this.cadastrarForm = this.formBuilder.group({
      cadastrarNome: ['', [Validators.required]],
      cadastrarEmail: ['', [Validators.required, Validators.email]],
      cadastrarSenha: ['', Validators.required]
    });
    this.recuperarForm = this.formBuilder.group({
      recuperarEmail: ['', [Validators.required, Validators.email]]
    });
  }

  logar() {
    this.api.logar(this.logarForm.value);

  }

  cadastrar() {
    this.api.cadastrar(this.cadastrarForm.value);
  }

  recuperar() {

    this.alert.adicionar('Senha enviada para ' + this.recuperarForm.get('recuperarEmail').value);
  }

  validar(formulario) {
    return formulario.status === 'VALID' ? false : true;
  }

}
