import { ProjectService } from './../../../core/services/project.service';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-delete',
  templateUrl: './project-delete.component.html',
  styleUrls: ['./project-delete.component.css']
})
export class ProjectDeleteComponent implements OnInit {
  constructor(
    private projectService: ProjectService,
    private toastr: ToastrService,
    private router: Router,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
  }

  deleteProject() {
    const idOfProject = this.route.snapshot.params['id'];

    this.projectService.deleteProject(idOfProject)
      .subscribe(_ => {
        this.toastr.success('Project deleted successfully');
        this.router.navigate(['/projects']);
      });
  }

}
