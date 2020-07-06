import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sensorcard',
  templateUrl: './sensorcard.component.html',
  styleUrls: ['./sensorcard.component.css']
})
export class SensorcardComponent implements OnInit {
  public title: string;

  constructor() { }

  ngOnInit(): void {
  }

}
