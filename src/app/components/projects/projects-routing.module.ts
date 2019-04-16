import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectCreateComponent } from './project-create/project-create.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { FetchProjectResolver } from 'src/app/core/resolvers/fetch-project.resolver';
import { FetchAllProjectsResolver } from 'src/app/core/resolvers/fetch-all-projects.resolver';


const routes: Routes = [
    {
        path: '',
        component: ProjectListComponent,
        pathMatch: 'full',
        resolve: {
            allProjects: FetchAllProjectsResolver
        }
    },
    { path: 'create', component: ProjectCreateComponent },
    {
        path: 'details/:id',
        component: ProjectDetailsComponent,
        resolve: {
            projectDetails: FetchProjectResolver,
        }
    }
];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routes)]
})
export class ProjectsRoutingModule { }
