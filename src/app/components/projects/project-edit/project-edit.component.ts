import { ProjectService } from './../../../core/services/project.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { IProject } from 'src/app/core/models';
import { ToastrService } from 'ngx-toastr';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-project-edit',
  templateUrl: './project-edit.component.html',
  styleUrls: ['./project-edit.component.css']
})
export class ProjectEditComponent implements OnInit, OnDestroy {
  private ngUnsubscribe = new Subject();
  editProjectForm: FormGroup;
  project: IProject;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private projectService: ProjectService,
    private toastr: ToastrService,
    private router: Router) {
    this.project = this.route.snapshot.data['projectDetails'];

    this.editProjectForm = this.fb.group({
      place: [this.project.place, [Validators.required, Validators.minLength(6)]],
      title: [this.project.title, [Validators.required, Validators.minLength(6)]],
      imageOfPlace: [this.project.imageOfPlace, [Validators.required, Validators.pattern(/https.+?(\.jpg|\.png)/)]],
      description: [this.project.description, [Validators.required, Validators.minLength(50)]],
      objectives: [this.project.objectives, [Validators.required, Validators.minLength(50)]],
      participantsProfile: [this.project.participantsProfile, [Validators.required, Validators.minLength(30)]],
      partnerCountries: [this.project.partnerCountries, [Validators.required, Validators.minLength(5)]],
      travelCost: [this.project.travelCost, [Validators.required, Validators.min(1)]],
      fee: [this.project.fee, [Validators.required, Validators.min(1)]],
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  editProject() {
    const idOfProject = this.route.snapshot.params['id'];

    this.projectService.editProject(this.editProjectForm.value, idOfProject)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(_ => {
        this.toastr.success('Project edited successfully');
        this.router.navigate(['/projects', 'details', idOfProject]);
      });
  }

  get place() {
    return this.editProjectForm.get('place');
  }

  get imageOfPlace() {
    return this.editProjectForm.get('imageOfPlace');
  }

  get description() {
    return this.editProjectForm.get('description');
  }

  get objectives() {
    return this.editProjectForm.get('objectives');
  }

  get participantsProfile() {
    return this.editProjectForm.get('participantsProfile');
  }

  get partnerCountries() {
    return this.editProjectForm.get('partnerCountries');
  }

  get travelCost() {
    return this.editProjectForm.get('travelCost');
  }

  get fee() {
    return this.editProjectForm.get('fee');
  }

  get title() {
    return this.editProjectForm.get('title');
  }

}
