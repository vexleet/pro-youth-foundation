import { AuthService } from 'src/app/core/services/auth.service';
import { ProjectService } from 'src/app/core/services/project.service';
import { Component, OnInit } from '@angular/core';
import { IProject } from 'src/app/core/models';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {
  project: IProject;
  isAdmin: boolean;

  constructor(
    private route: ActivatedRoute,
    private authService: AuthService) {
    this.project = this.route.snapshot.data['projectDetails'];
    this.isAdmin = this.authService.isAdmin();
  }

  ngOnInit() {
  }

}
