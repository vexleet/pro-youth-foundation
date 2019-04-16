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

  constructor(
    private route: ActivatedRoute) {
    this.project = this.route.snapshot.data['projectDetails'];
  }

  ngOnInit() {
  }

}
