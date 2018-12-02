import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.css']
})
export class BasicInfoComponent  {

  person = new Person('Millie','MillieLee@gmail.com', '1234567890','September 14, 2015');
  title = "bioinfo";
  submitted = false;

  onSubmit() { this.submitted = true; }

  submit() {
    console.log(this.person);
  }  
  
  // TODO: remove this when we're done
 // get diagnostic() { return JSON.stringify(this.model);}
  // get diagnostic() { return JSON.stringify(this.person);}
}
//*export class AppRoutingModuleFormComponent implements OnInit {

  
class Person {
  name: String;
  email: String;
  ssn: String;
  dob: String;
  constructor(name:String, email, ssn:String, dob:String) {
    this.name = name;
    this.email = email;
    this.ssn = ssn;
    this.dob = dob;

  }

}


 //* constructor() { }

 //* ngOnInit() {
 //* }

//*}
