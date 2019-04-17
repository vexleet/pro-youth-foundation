import { AuthService } from './../../../core/services/auth.service';
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
  isAdmin: boolean;

  constructor(
    private route: ActivatedRoute,
    private authService: AuthService, ) {
    this.projects = this.route.snapshot.data['allProjects'];
    this.isAdmin = this.authService.isAdmin();
  }

  ngOnInit() {
  }

}
