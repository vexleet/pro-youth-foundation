import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectCreateComponent } from './project-create/project-create.component';


const routes: Routes = [
    { path: "", component: ProjectListComponent, pathMatch: 'full' },
    { path: "create", component: ProjectCreateComponent },
];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routes)]
})
export class ProjectsRoutingModule { }