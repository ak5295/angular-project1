import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRoutingModule} from './modules/app-routing/app-routing.module';
import { SampleComponent } from './components/sample/sample.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BasicInfoComponent } from './components/basic-info/basic-info.component';


@NgModule({
    declarations: [SampleComponent, AppComponent, HomeComponent, BasicInfoComponent], 
    imports: [
        BrowserModule,
        AppRoutingModule
    ], 
    bootstrap: [AppComponent]
})
export class AppModule {}
