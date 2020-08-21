import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  logarForm: FormGroup;
  cadastrarForm: FormGroup;
  recuperarForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {
  }

  ngOnInit(): void {
    this.logarForm = this.formBuilder.group({
      logarUsuario: ['', Validators.required],
      logarSenha: ['', Validators.required]
    });
    this.cadastrarForm = this.formBuilder.group({
      cadastrarEmail: ['', Validators.required],
      cadastrarUsuario: ['', Validators.required],
      cadastrarSenha: ['', Validators.required]
    });
    this.recuperarForm = this.formBuilder.group({
      recuperarEmail: ['', Validators.required]
    });
  }

  logar() {
    this.router.navigate(['main']);
  }

  cadastrar() {
    console.log(this.cadastrarForm);
  }

  recuperar() {
    console.log(this.recuperarForm);
  }

  validar(formulario) {
    return formulario.status === 'VALID' ? false : true;
  }

}
