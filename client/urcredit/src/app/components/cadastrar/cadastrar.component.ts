import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {
  cadastrarForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private api: ApiService) { }

  ngOnInit(): void {
    this.cadastrarForm = this.formBuilder.group({
      nome: [''],
      cpf: [''],
      divida: [''],
    });
  }
  salvar() {
    console.log(this.cadastrarForm);
    this.api.cadastrarDivida(this.cadastrarForm.value);

  }
}
