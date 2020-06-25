import { Component, OnInit } from '@angular/core';
import { WebsocketapiService } from '../../../services/websocketapi.service';
import { SensorData } from '../../../models/SensorData';
import {DomSanitizer} from "@angular/platform-browser";
@Component({
  selector: 'app-rearcamera',
  templateUrl: './rearcamera.component.html',
  styleUrls: ['./rearcamera.component.css']
})
export class RearcameraComponent implements OnInit {
  public img: any;
  private currentBlob: any;
  private reader: FileReader;
  constructor(private socket: WebsocketapiService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.reader = new FileReader();
    this.reader.onloadend = () => {
      this.currentBlob = this.reader.result;
      this.img = this.sanitizer.bypassSecurityTrustUrl('data:image/jpg;base64,'+this.currentBlob);
    }
    console.log("Adding Listener");
    this.socket.getSensorData().subscribe((data) => this.handleSensorData(data));
    this.socket.linkSensorObservable(1);
  }

  handleSensorData(dataMessage: SensorData) {
    //console.log(dataMessage);
    //rear camera should be sensor 2
    if (dataMessage.id == 1) {
      this.handleRearCamera(dataMessage.data);
      return;
    } else {
      return;
    }
  }

  handleRearCamera(cameraData: Uint8Array) {
    this.img = 'data:image/jpg;base64,'+cameraData
  }

}
