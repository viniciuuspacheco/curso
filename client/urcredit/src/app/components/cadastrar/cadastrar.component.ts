import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RequestService } from 'src/app/services/request.service';
import { LoadService } from 'src/app/tools/load/load.service';
@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {
  cadastrarForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private request: RequestService, private load: LoadService) { }

  ngOnInit(): void {
    this.cadastrarForm = this.formBuilder.group({
      nome: [''],
      cpf: [''],
      divida: [''],
    });
  }
  salvar() {
    this.request.cadastrarDividas(this.cadastrarForm.value).subscribe(res => {
      console.log(res);
    })
  }
}
