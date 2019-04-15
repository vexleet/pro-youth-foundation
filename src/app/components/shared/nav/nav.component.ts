import { ToastrService } from 'ngx-toastr';
import { AuthService } from './../../../core/services/auth.service';
import { Component, OnInit, DoCheck } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit, DoCheck {
  isLoggedIn: boolean;

  constructor(
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService) {
    this.isLoggedIn = authService.isAuthenticated();
  }

  ngOnInit() {
  }

  ngDoCheck() {
    this.isLoggedIn = this.authService.isAuthenticated();
  }

  logout() {
    this.authService.logout()
      .subscribe(_ => {
        localStorage.clear();
        this.toastr.success('You have successfully logged out.');
        this.router.navigate(['/']);
      });
  }

}
