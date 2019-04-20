import { FetchVolunteerResolver } from 'src/app/core/resolvers/fetch-volunteer.resolver';
import { VolunteerDetailsComponent } from './volunteer-details/volunteer-details.component';
import { VolunteerListComponent } from './volunteer-list/volunteer-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/projects',
    },
    {
        path: 'project/:id',
        component: VolunteerListComponent,
    },
    {
        path: 'details/:id',
        component: VolunteerDetailsComponent,
        resolve: {
            volunteerDetails: FetchVolunteerResolver,
        }
    }
];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routes)]
})
export class VolunteersRoutingModule { }
