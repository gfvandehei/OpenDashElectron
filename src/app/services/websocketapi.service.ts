import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { SensorData } from '../models/SensorData';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class WebsocketapiService {

  constructor(private socket: Socket) {}

  sendMessage(message: string) {
    this.socket.emit('message', message);
  }

  sendCommand(sensorId: number, command: number, args: Array<any>) {
    this.socket.emit("command", [sensorId, command, args]);
  }

  linkSensorObservable(sensorId: number) {
    this.socket.emit("request_sensor", sensorId);
  }

  getSensorData(): Observable<SensorData> {
    return this.socket.fromEvent<SensorData>('sensor_state');
  }
}
