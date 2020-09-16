import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AlertsService } from 'src/app/tools/alerts/alerts.service';
import { LoadService } from 'src/app/tools/load/load.service'
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url = 'http://18.228.3.33/api/';

  constructor(private router: Router, private alert: AlertsService, private load: LoadService) { }

  logar(params) {
    this.load.carregando(true);
    var object = {
      "email": params.logarEmail,
      "password": params.logarSenha
    }

    fetch(this.url + 'login', {
      method: 'post',
      headers: new Headers({
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify(object)
    }).then((response) => {

      this.load.carregando(false);
      return response.json();

    }).then(data => {

      if (data.success) {
        sessionStorage.setItem('token', data.data);
        this.router.navigate(['main']);
      }
      else {
        this.alert.adicionar(data.message);
      }

    })
  }

  cadastrar(params) {
    console.log(params);
    this.load.carregando(true);
    var object = {
      "name": params.cadastrarNome,
      "email": params.cadastrarEmail,
      "password": params.cadastrarSenha
    }

    fetch(this.url + 'register', {
      method: 'post',
      headers: new Headers({
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify(object)
    }).then((response) => {

      this.load.carregando(false);
      return response.json();

    }).then(data => {

      this.alert.adicionar(data.message);

    })
  }
}
