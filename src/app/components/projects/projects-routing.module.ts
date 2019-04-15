import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProjectListComponent } from './project-list/project-list.component';


const routes: Routes = [
    { path: "", component: ProjectListComponent, pathMatch: 'full' },
];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routes)]
})
export class ProjectsRoutingModule { }