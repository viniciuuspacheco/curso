import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { observable, Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AlertsService } from 'src/app/tools/alerts/alerts.service';
import { LoadService } from 'src/app/tools/load/load.service'
@Injectable({
  providedIn: 'root'
})

export class RequestService {

  url = 'http://18.228.3.33/api/';

  httpOptions = {
    headers: new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    })
  }

  constructor(private http: HttpClient, private router: Router, private alert: AlertsService, private load: LoadService) { }

  public login(params): Observable<any> {
    console.log(params);

    var object = {
      "email": params.logarEmail,
      "password": params.logarSenha
    }

    let options = {
      headers: new HttpHeaders({
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      })
    }
    return this.http.post(this.url + 'login', JSON.stringify(object), options)
  }


  public cadastrarUsuario(params): Observable<any> {
    console.log(params);

    var object = {
      "name": params.cadastrarNome,
      "email": params.cadastrarEmail,
      "password": params.cadastrarSenha
    }

    let options = {
      headers: new HttpHeaders({
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      })
    }
    return this.http.post(this.url + 'register', JSON.stringify(object), options)
  }




  public getDividas(): Observable<any> {
    return this.http.get(this.url + 'debt', this.httpOptions);

  }

  public buscarDividas(params): Observable<any> {
    return this.http.get(this.url + 'debt/' + params.cpf, this.httpOptions);
  }
  public cadastrarDividas(params): Observable<any> {
    var object = {
      'name': params.nome,
      'cpf': params.cpf,
      'value': params.divida
    }
    return this.http.post(this.url + 'debt', JSON.stringify(object), this.httpOptions)

  }

  public editarDividas(params): Observable<any> {
    var object = {
      'name': params.nome,
      'cpf': params.cpf,
      'value': params.valor
    }
    return this.http.put(this.url + 'debt/' + params.id, JSON.stringify(object), this.httpOptions)

  }

  public apagarDividas(params): Observable<any> {

    return this.http.delete(this.url + 'debt/' + JSON.stringify(params.id), this.httpOptions)

  }
}

