import { ActivatedRoute } from '@angular/router';
import { IProject } from './../../../core/models';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  projects: IProject;

  constructor(private route: ActivatedRoute) {
    this.projects = this.route.snapshot.data['allProjects'];
  }

  ngOnInit() {
  }

}
