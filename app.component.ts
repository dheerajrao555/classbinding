import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public name="dheeraj";
  public fname="venkateshwar rao"
  public married="single"

  public nameOfPerson="textName"
  public fnameOfPerson="textFname"
  public status="textMaratialStatus"

  public hasError=true;
  public fullInf={
    "textName":this.hasError,
    "textFname":this.hasError,
    "fontStyle1":this.hasError
    
  }

 
}
