import { AuthService } from './../../../core/services/auth.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, OnDestroy {
  private ngUnsubscribe = new Subject();
  registerForm = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    repeatPass: ['', [Validators.required, Validators.minLength(6)]],
    isAdmin: [false],
  });

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService) { }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  register() {
    if (this.password.value !== this.repeatPass.value) {
      this.toastr.error('Passwords must match!');
      return;
    }

    this.authService.register(this.registerForm.value)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(_ => {
        this.toastr.success('You have successfully registered');
        this.router.navigate(['/login']);
      });
  }

  get username() {
    return this.registerForm.get('username');
  }

  get email() {
    return this.registerForm.get('email');
  }

  get password() {
    return this.registerForm.get('password');
  }

  get repeatPass() {
    return this.registerForm.get('repeatPass');
  }

}
