import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRoutingModule} from './modules/app-routing/app-routing.module';
import { SampleComponent } from './components/sample/sample.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
// import { FormsModule } from '@angular/forms' ;
import { BasicInfoComponent } from './components/basic-info/basic-info.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
// import {MaterialModule,  MatButtonModule,
//     MatFormFieldModule,
//     MatInputModule,
//     MatRippleModule} 
//     from '@angular/material';


@NgModule({
    declarations: [SampleComponent, AppComponent, HomeComponent, BasicInfoComponent], 
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
