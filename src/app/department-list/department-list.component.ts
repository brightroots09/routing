import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"

@Component({
  selector: 'app-department-list',
  template: `
    <ul *ngFor="let department of departments">
      <li (click)=onClick(department)><span class="badge">{{department.id}}</span> {{department.name}}</li>
    </ul>
  `,
  styles: []
})
export class DepartmentListComponent implements OnInit {

  public departments = [
    {
      "id": 1, "name": "Angular 6" 
    },
    {
      "id": 2, "name": "Node"
    },
    {
      "id": 3, "name": "MongoDB"
    },
    {
      "id": 4, "name": "Ruby"
    },
    {
      "id": 5, "name": "Bootstrap"
    }
  ]

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onClick(department){
    this.router.navigate(['/departments', department.id])
  }

}
