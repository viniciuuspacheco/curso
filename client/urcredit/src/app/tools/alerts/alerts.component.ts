import { Component, OnInit } from '@angular/core';
import { AlertsService } from "src/app/tools/alerts/alerts.service";
@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css']
})
export class AlertsComponent implements OnInit {
  constructor(public alerts: AlertsService) {
  }

  ngOnInit() {
  }
  fechar(id) {
    this.alerts.fechar(id);
  }
}