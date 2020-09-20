import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RequestService } from 'src/app/services/request.service';
import { AlertsService } from 'src/app/tools/alerts/alerts.service';
import { LoadService } from 'src/app/tools/load/load.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  logarForm: FormGroup;
  cadastrarForm: FormGroup;
  recuperarForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private alert: AlertsService, private request: RequestService, private load: LoadService) {
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
    this.request.login(this.logarForm.value).subscribe(res => {
      sessionStorage.setItem('token', res.data);
      this.router.navigate(['main']);
    })


  }

  cadastrar() {
    this.request.cadastrarUsuario(this.cadastrarForm.value).subscribe(res => {

    })
  }

  recuperar() {

    this.alert.adicionar('Senha enviada para ' + this.recuperarForm.get('recuperarEmail').value);
  }

  validar(formulario) {
    return formulario.status === 'VALID' ? false : true;
  }

}
