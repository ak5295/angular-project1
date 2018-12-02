import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import { SampleComponent } from 'src/app/components/sample/sample.component';
import { HomeComponent } from 'src/app/components/home/home.component';
import { BasicInfoComponent } from 'src/app/components/basic-info/basic-info.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent}, 
  {path: 'sample', component: SampleComponent},
  {path: 'basicinfo', component: BasicInfoComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ], 
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
