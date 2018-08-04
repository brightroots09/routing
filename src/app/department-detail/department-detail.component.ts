import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from "@angular/router"
@Component({
  selector: 'app-department-detail',
  template: `
    <p>
      Department Selected is: {{department_id}}
    </p>
    <a (click)="goPrevious()">Previous</a>
    <a (click)="goNext()">Next</a>
    <button (click)="goBack()">Back</button>
  `,
  styles: []
})
export class DepartmentDetailComponent implements OnInit {

  public department_id;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    // let id = parseInt(this.route.snapshot.paramMap.get("id"));
    // this.department_id = id;
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get("id"))
      this.department_id = id;
    })
  }

  goPrevious(){
    let previous_id = this.department_id - 1
    this.router.navigate(["/departments", previous_id])
  }

  goNext(){
    let next_id = this.department_id + 1
    this.router.navigate(["/departments", next_id])
  }

  goBack(){
    let selectedId = this.department_id ? this.department_id : null
    this.router.navigate(["/departments", {id: selectedId}])
  }

}
