import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rearcamera',
  templateUrl: './rearcamera.component.html',
  styleUrls: ['./rearcamera.component.css']
})
export class RearcameraComponent implements OnInit {
  public img: Blob;

  constructor() { }

  ngOnInit(): void {
    this.img = new Blob();
  }

}
