import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ProjectService } from 'src/app/core/services/project.service';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-project-create',
  templateUrl: './project-create.component.html',
  styleUrls: ['./project-create.component.css']
})
export class ProjectCreateComponent implements OnInit, OnDestroy {
  private ngUnsubscribe = new Subject();
  createProjectForm = this.fb.group({
    place: ['', [Validators.required, Validators.minLength(6)]],
    title: ['', [Validators.required, Validators.minLength(6)]],
    imageOfPlace: ['', [Validators.required, Validators.pattern(/https.+?(\.jpg|\.png)/)]],
    description: ['', [Validators.required, Validators.minLength(50)]],
    objectives: ['', [Validators.required, Validators.minLength(50)]],
    participantsProfile: ['', [Validators.required, Validators.minLength(30)]],
    partnerCountries: ['', [Validators.required, Validators.minLength(5)]],
    travelCost: ['', [Validators.required, Validators.min(1)]],
    fee: ['', [Validators.required, Validators.min(1)]],
  });

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private projectService: ProjectService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  createProject() {
    this.projectService.createProject(this.createProjectForm.value)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(_ => {
        this.toastr.success('Project created successfully!');
        this.router.navigate(['/projects']);
      });
  }

  get place() {
    return this.createProjectForm.get('place');
  }

  get imageOfPlace() {
    return this.createProjectForm.get('imageOfPlace');
  }

  get description() {
    return this.createProjectForm.get('description');
  }

  get objectives() {
    return this.createProjectForm.get('objectives');
  }

  get participantsProfile() {
    return this.createProjectForm.get('participantsProfile');
  }

  get partnerCountries() {
    return this.createProjectForm.get('partnerCountries');
  }

  get travelCost() {
    return this.createProjectForm.get('travelCost');
  }

  get fee() {
    return this.createProjectForm.get('fee');
  }

  get title() {
    return this.createProjectForm.get('title');
  }
}
