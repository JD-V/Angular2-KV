import { Component } from '@angular/core';


@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html' //this path is relative to index.html `
})

export  class AppComponent {
  //can have methods and properties
  pageHeader : string = "Employee Details";
  classesToApply : string = 'italicClass boldClass';
  applyBoldClass : boolean = true;
  applyiItalicClass : boolean = true;

  addClasses() {
    // 'let' is another way to create a variable, it has some advantages over 'var' keyword
    let classes= {
      boldClass : this.applyBoldClass,
      italicClass : this.applyiItalicClass
    };

    return classes;
  }
}