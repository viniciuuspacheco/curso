import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  logarForm: FormGroup;
  cadastrarForm: FormGroup;
  recuperarForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private api: ApiService) {
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
    console.log(this.api.request(this.logarForm.value));
    // this.router.navigate(['main']);
  }

  cadastrar() {
    console.log(this.api.request(this.cadastrarForm.value));
  }

  recuperar() {
    console.log(this.api.request(this.recuperarForm.value));
  }

  validar(formulario) {
    return formulario.status === 'VALID' ? false : true;
  }

}
