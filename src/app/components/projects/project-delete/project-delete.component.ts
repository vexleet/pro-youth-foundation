import { ProjectService } from './../../../core/services/project.service';
import { Component, OnInit, Input, EventEmitter, Output, OnDestroy } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-project-delete',
  templateUrl: './project-delete.component.html',
  styleUrls: ['./project-delete.component.css']
})
export class ProjectDeleteComponent implements OnInit, OnDestroy {
  private ngUnsubscribe = new Subject();
  constructor(
    private projectService: ProjectService,
    private toastr: ToastrService,
    private router: Router,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  deleteProject() {
    const idOfProject = this.route.snapshot.params['id'];

    this.projectService.deleteProject(idOfProject)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(_ => {
        this.toastr.success('Project deleted successfully');
        this.router.navigate(['/projects']);
      });
  }

}
