import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router"
@Component({
  selector: 'app-department-detail',
  template: `
    <p>
      Department Selected is: {{id}}
    </p>
  `,
  styles: []
})
export class DepartmentDetailComponent implements OnInit {

  public id;

  constructor(private router: ActivatedRoute) { }

  ngOnInit() {
    let id = parseInt(this.router.snapshot.paramMap.get("id"));
    this.id = id;
  }


}
