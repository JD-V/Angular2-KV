import { Component } from '@angular/core';

@Component({
    selector: 'my-employee',
    templateUrl: 'app/employee/employee.component.html'  //relative to index.html
})

export class EmployeeComponent {
    firstName : string = 'Tom';
    lastName : string = 'Hopkings';
    gender : string = 'Male';
    age : number = 20;
}