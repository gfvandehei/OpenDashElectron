import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/views/home/home.component';
import { RearcameraComponent } from './components/views/rearcamera/rearcamera.component';

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: 'full' },
  { path: "home", component: HomeComponent },
  { path: "rear-camera", component: RearcameraComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
