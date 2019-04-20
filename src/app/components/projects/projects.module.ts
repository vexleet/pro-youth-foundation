import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectListComponent } from './project-list/project-list.component';
import { MaterialModule } from 'src/app/material.module';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { ProjectCreateComponent } from './project-create/project-create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ShortenDescPipe } from 'src/app/core/pipes/shorten-desc.pipe';
import { ProjectDeleteComponent } from './project-delete/project-delete.component';
import { ProjectEditComponent } from './project-edit/project-edit.component';
import { ProjectParticipateComponent } from './project-participate/project-participate.component';

@NgModule({
  declarations: [
    ProjectListComponent,
    ProjectDetailsComponent,
    ProjectCreateComponent,
    ProjectDeleteComponent,
    ShortenDescPipe,
    ProjectEditComponent,
    ProjectParticipateComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    ProjectsRoutingModule,
    ReactiveFormsModule,
  ],
  exports: []
})
export class ProjectsModule { }
