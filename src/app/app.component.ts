import { Component } from '@angular/core';


@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html' //this path is relative to index.html so f
})

export  class AppComponent {
  //can have methods and properties
  name : string = "Angular 2";
}