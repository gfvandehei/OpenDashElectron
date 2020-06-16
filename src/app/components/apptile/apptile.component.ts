import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-apptile',
  templateUrl: './apptile.component.html',
  styleUrls: ['./apptile.component.css']
})
export class ApptileComponent{
  @Input() link: string = "";
  @Input() backgroundImage: string = "assets/defaultimage";
  
  constructor(private router: Router) { }

  ngOnInit(): void {
    
  }

  getAppBackground() {
    return {
      "background-image": this.backgroundImage
    };
  }

  navigate() {
    this.router.navigate([this.link])
      .then((e) => {
        if (!e) {
          console.log("Navigation has failed");
        }
      })
  }

}
