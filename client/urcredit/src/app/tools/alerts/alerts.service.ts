import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertsService {
  notification = [];
  constructor() { }

  adicionar(texto) {
    this.notification.push(texto);
    setTimeout(() => {
      this.notification.shift();
    }, 5000);
  }
  fechar(id) {
    this.notification.splice(this.notification.indexOf(id), 1);
  }
}
