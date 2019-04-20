import { VolunteerService } from './../services/volunteer.service';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { IVolunteer } from '../models';

@Injectable({
    providedIn: 'root'
})
export class FetchVolunteerResolver implements Resolve<IVolunteer> {

    constructor(private volunteerService: VolunteerService) { }

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<IVolunteer> {
        return this.volunteerService.getDetails(route.params.id);
    }
}
