import { ActivatedRoute, Router } from '@angular/router';
import { VolunteerService } from './../../../core/services/volunteer.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { IVolunteer } from 'src/app/core/models';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-project-participate',
  templateUrl: './project-participate.component.html',
  styleUrls: ['./project-participate.component.css']
})
export class ProjectParticipateComponent implements OnInit, OnDestroy {
  private ngUnsubscribe = new Subject();

  participateForm = this.fb.group({
    fullName: ['', [Validators.required]],
    telephone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
    age: ['', [Validators.required, Validators.min(18)]],
    gender: ['Male', [Validators.required]],
    specialNeeds: ['', [Validators.required]],
    coverLetter: ['', [Validators.required, Validators.minLength(50)]],
  });

  constructor(
    private fb: FormBuilder,
    private volunteerService: VolunteerService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService) { }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  sendLetter() {
    const newVolunteer: IVolunteer = this.participateForm.value;
    const idOfProject = this.route.snapshot.params.id;
    newVolunteer['idOfProject'] = idOfProject;

    this.volunteerService.createVolunteer(newVolunteer)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(_ => {
        this.toastr.success('We will contact you via email if you are accepted!');
        this.router.navigate(['/projects']);
      });
  }

  get fullName() {
    return this.participateForm.get('fullName');
  }

  get telephone() {
    return this.participateForm.get('telephone');
  }

  get age() {
    return this.participateForm.get('age');
  }

  get gender() {
    return this.participateForm.get('gender');
  }

  get specialNeeds() {
    return this.participateForm.get('specialNeeds');
  }

  get coverLetter() {
    return this.participateForm.get('coverLetter');
  }

}
