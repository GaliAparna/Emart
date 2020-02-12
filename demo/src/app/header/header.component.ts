import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {

  webTitle:string;
  webImage:string;
  webText:string;

  constructor() { 
    this.webTitle="Angular";
    this.webText="welcome to angular";
    this.webImage="assets/images/image1.jpg";
  }

  
}
