import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeComponent } from './components/views/home/home.component';
import { ViewcontainerComponent } from './components/viewcontainer/viewcontainer.component';
import { ApptileComponent } from './components/apptile/apptile.component';
import { RearcameraComponent } from './components/views/rearcamera/rearcamera.component';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { ClimateComponent } from './components/views/climate/climate.component';
import { SensorcardComponent } from './components/sensorcard/sensorcard.component';

const config: SocketIoConfig = {
  url: 'localhost:3000',
  options: {}
}

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HomeComponent,
    ViewcontainerComponent,
    ApptileComponent,
    RearcameraComponent,
    ClimateComponent,
    SensorcardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
