import { Component, OnInit } from '@angular/core';
import { Person } from '../../model/person';

@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.css']
})
export class BasicInfoComponent  {

  person = new Person(
    'Millie',
    '123 Market Street',
    'apt 123',
    'Baltimore',
    'MD',
    '22111',
    'MillieLee@gmail.com',
    '1234567890',
    'September 14, 2015'
    );
  title = 'bioinfo';
  submitted = false;

  onSubmit() { this.submitted = true; }

  submit() {
    console.log(this.person);
  }

 // onZipChange() {
 //   console.log(this.person.zip);
  // }

  // TODO: remove this when we're done
 // get diagnostic() { return JSON.stringify(this.model);}
  // get diagnostic() { return JSON.stringify(this.person);}
}
// *export class AppRoutingModuleFormComponent implements OnInit {





 // * constructor() { }

 // * ngOnInit() {
 // * }

// *}
