import { Component } from '@angular/core';

@Component({
    selector: 'my-employee',
    templateUrl: 'app/employee/employee.component.html',  //relative to index.html
    styleUrls : ['app/employee/employee.component.css'] 
})

export class EmployeeComponent {
    firstName : string = 'Tom';
    lastName : string = 'Hopkings';
    gender : string = 'Male';
    age : number = 20;
    columnSpan: number = 2;
}