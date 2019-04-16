import { IProject } from './../../../core/models';
import { ProjectService } from 'src/app/core/services/project.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  projects: Observable<IProject>;

  constructor(private projectService: ProjectService) {
    this.projects = this.projectService.getAll();
  }

  ngOnInit() {
  }

}
