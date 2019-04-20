import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APP_KEY } from '../../kinvey.tokens';
import { IVolunteer } from '../models';

@Injectable({
  providedIn: 'root'
})
export class VolunteerService {
  private readonly BASE_URL = `https://baas.kinvey.com/appdata/${APP_KEY}`;
  private readonly ALL_VOLUNTEER = `${this.BASE_URL}/volunteers?query={}&sort={"_kmd.ect": -1}`;
  private readonly CREATE_VOLUNTEER = `${this.BASE_URL}/volunteers`;

  constructor(private http: HttpClient) { }

  createVolunteer(body: IVolunteer) {
    return this.http.post(this.CREATE_VOLUNTEER, body);
  }

  getAll() {
    return this.http.get<IVolunteer[]>(this.ALL_VOLUNTEER);
  }

  getDetails(id: string) {
    return this.http.get<IVolunteer>(`${this.CREATE_VOLUNTEER}/${id}`);
  }
}
