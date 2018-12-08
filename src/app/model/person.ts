export class Person {

  name: String;
  street1: string;
  street2: string;
  city: string;
  state: string;
  zip: string;
  email: String;
  ssn: String;
  dob: String;

  constructor(name: String, street1: string,
    street2: string,
    city: string, state: string,
    zip: string, email: string,
    ssn: String, dob: String) {
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
