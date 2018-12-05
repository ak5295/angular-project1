import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.css']
})
export class BasicInfoComponent  {

  person = new Person('Millie','123 Market Street','apt 123','Baltimore','MD','22111','MillieLee@gmail.com', '1234567890','September 14, 2015');
  title = "bioinfo";
  submitted = false;

  onSubmit() { this.submitted = true; }

  submit() {
    console.log(this.person);
  }  

 // onZipChange() {
 //   console.log(this.person.zip);
  //}
  
  // TODO: remove this when we're done
 // get diagnostic() { return JSON.stringify(this.model);}
  // get diagnostic() { return JSON.stringify(this.person);}
}
//*export class AppRoutingModuleFormComponent implements OnInit {

  
class Person {
  name: String;
  street1: string;
  street2: string;
  city: string;
  state: string;
  zip: string;
  email: String;
  ssn: String;
  dob: String;
  constructor(name:String, street1:string, street2:string, city:string, state:string, zip:string, email:string, ssn:String, dob:String) {
    this.name = name;
    this.street1 = street1;
    this.street2 = street2;
    this.city = city;
    this.state = state;
    this.zip = zip;
    this.email = email;
    this.ssn = ssn;
    this.dob = dob;

  }

}


 //* constructor() { }

 //* ngOnInit() {
 //* }

//*}
