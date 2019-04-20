import { CanLoadVolunteer } from './core/guards/volunteer.guard';
import { AuthGuard } from './core/guards/auth.guard';
import { CanLoadProject } from './core/guards/project.guard';
import { ProjectListComponent } from './components/projects/project-list/project-list.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/authentication/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './components/authentication/register/register.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'projects',
    loadChildren: './components/projects/projects.module#ProjectsModule',
    canLoad: [CanLoadProject]
  },
  {
    path: 'volunteers',
    loadChildren: './components/volunteers/volunteers.module#VolunteersModule',
    canLoad: [CanLoadVolunteer],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
