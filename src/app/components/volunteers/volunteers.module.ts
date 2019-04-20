import { FlexLayoutModule } from '@angular/flex-layout';
import { FetchVolunteerResolver } from './../../core/resolvers/fetch-volunteer.resolver';
import { VolunteersRoutingModule } from './volunteers-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VolunteerListComponent } from './volunteer-list/volunteer-list.component';
import { MaterialModule } from 'src/app/material.module';
import { VolunteerDetailsComponent } from './volunteer-details/volunteer-details.component';

@NgModule({
  declarations: [
    VolunteerListComponent,
    VolunteerDetailsComponent,
  ],
  imports: [
    CommonModule,
    VolunteersRoutingModule,
    MaterialModule,
    FlexLayoutModule,
  ]
})
export class VolunteersModule { }
