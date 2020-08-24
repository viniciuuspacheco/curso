import { Component, OnInit } from '@angular/core';
import { LoadService } from 'src/app/tools/load/load.service'
@Component({
  selector: 'app-load',
  templateUrl: './load.component.html',
  styleUrls: ['./load.component.css']
})
export class LoadComponent implements OnInit {

  constructor(public load: LoadService) { }

  ngOnInit(): void {
  }

}
