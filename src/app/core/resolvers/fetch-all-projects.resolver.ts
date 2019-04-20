import { ProjectService } from './../services/project.service';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { IProject } from '../models';

@Injectable({
    providedIn: 'root'
})
export class FetchAllProjectsResolver implements Resolve<IProject[]> {

    constructor(private projectService: ProjectService) { }

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<IProject[]> {
        return this.projectService.getAll();
    }
}
