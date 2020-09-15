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
        'Access-Control-Allow-Origin': 'http://localhost',
      }),
      body: JSON.stringify(object) 
    }).then((response) => { 
      this.load.carregando(false);
      if (response.status === 200) {
        this.router.navigate(['main']);
      }
      else {
        this.alert.adicionar('Usuário e Senha não encontrado');
      }
      return response.json();
    }).then(data => {
      sessionStorage.setItem('token', data.data);
    })
  }
}
