import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { AlertsService } from 'src/app/tools/alerts/alerts.service';
import { LoadService } from 'src/app/tools/load/load.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  logarForm: FormGroup;
  cadastrarForm: FormGroup;
  recuperarForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private api: ApiService, private alert: AlertsService, private load: LoadService) {
  }

  ngOnInit(): void {
    this.logarForm = this.formBuilder.group({
      logarUsuario: ['', Validators.required],
      logarSenha: ['', Validators.required]
    });
    this.cadastrarForm = this.formBuilder.group({
      cadastrarEmail: ['', [Validators.required, Validators.email]],
      cadastrarUsuario: ['', Validators.required],
      cadastrarSenha: ['', Validators.required]
    });
    this.recuperarForm = this.formBuilder.group({
      recuperarEmail: ['', [Validators.required, Validators.email]]
    });
  }

  logar() {
    this.alert.adicionar('Usuário não encontrado!');
    this.load.carregando(true);
    setTimeout(() => {
      this.load.carregando(false);
    }, 1000);
    console.log(this.api.request(this.logarForm.value));
    // this.router.navigate(['main']);
  }

  cadastrar() {
    this.alert.adicionar('Cadastro realizado com sucesso!');
    console.log(this.api.request(this.cadastrarForm.value));
  }

  recuperar() {
    this.alert.adicionar('Um e-mail foi enviado para você!');
    console.log(this.api.request(this.recuperarForm.value));
  }

  validar(formulario) {
    return formulario.status === 'VALID' ? false : true;
  }

}
