import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  mostrar = true;
  constructor(private router: Router) { }

  ngOnInit(): void {

  }
  toggle() {
    this.mostrar = !this.mostrar;
  }
  deslogar() {
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }
}
