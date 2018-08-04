import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from "@angular/router"

@Component({
  selector: 'app-department-list',
  template: `
    <ul *ngFor="let department of departments">
      <li (click)=onClick(department) [class.selected]="isSelected(department)"><span class="badge">{{department.id}}</span> {{department.name}}</li>
    </ul>
  `,
  styles: []
})
export class DepartmentListComponent implements OnInit {

  public selectedId;

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

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get("id"))
      this.selectedId = id;
    })
  }

  onClick(department){
    this.router.navigate(['/departments', department.id])
  }

  isSelected(department){
    return department.id === this.selectedId
  }

}
