import { Component, OnInit } from '@angular/core';
import { WebsocketapiService } from '../../../services/websocketapi.service';
import { SensorData } from '../../../models/SensorData';

@Component({
  selector: 'app-rearcamera',
  templateUrl: './rearcamera.component.html',
  styleUrls: ['./rearcamera.component.css']
})
export class RearcameraComponent implements OnInit {
  public img: Blob;

  constructor(private socket: WebsocketapiService) { }

  ngOnInit(): void {
    this.socket.getSensorData().subscribe((data) => this.handleSensorData(data));
    this.socket.linkSensorObservable(2);
  }

  handleSensorData(dataMessage: SensorData) {
    //rear camera should be sensor 2
    if (dataMessage.id == 2) {
      this.handleRearCamera(dataMessage.data);
      return;
    } else {
      return;
    }
  }

  handleRearCamera(cameraData: any) {
    console.log(cameraData);
  }

}
