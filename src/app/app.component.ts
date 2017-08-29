import { Component } from '@angular/core';


@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html' //this path is relative to index.html `
})

export  class AppComponent {
  //can have methods and properties
  pageHeader : string = "Employee Details";

  imageSource = "images/logo.jpg"; 

  isDisabled : boolean = true;

  badHtml : string ="hello <script>alert('World')</script>world";  // example of sanitization of bad html
}