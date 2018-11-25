import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.css']
})
export class BasicInfoComponent{

  //model = new AppRoutingModule('Millie','1234567890','September 14, 2015');
  
  submitted = false;

  onSubmit() { this.submitted = true; }

  // TODO: remove this when we're done
 // get diagnostic() { return JSON.stringify(this.model);}
}
//*export class AppRoutingModuleFormComponent implements OnInit {

 //* constructor() { }

 //* ngOnInit() {
 //* }

//*}
