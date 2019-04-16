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

@NgModule({
  declarations: [
    ProjectListComponent,
    ProjectDetailsComponent,
    ProjectCreateComponent,
    ShortenDescPipe,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    ProjectsRoutingModule,
    ReactiveFormsModule,
  ],
  exports: [
    ProjectListComponent
  ]
})
export class ProjectsModule { }
