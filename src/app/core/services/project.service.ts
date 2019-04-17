import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APP_KEY } from '../../kinvey.tokens';
import { IProject } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private readonly BASE_URL = `https://baas.kinvey.com/appdata/${APP_KEY}`;
  private readonly ALL_PROJECTS = `${this.BASE_URL}/projects?query={}&sort={"_kmd.ect": -1}`;
  private readonly CREATE_PROJECT = `${this.BASE_URL}/projects`;

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<IProject>(this.ALL_PROJECTS);
  }

  createProject(body: IProject) {
    return this.http.post(this.CREATE_PROJECT, body);
  }

  getDetails(id: string) {
    return this.http.get<IProject>(`${this.CREATE_PROJECT}/${id}`);
  }

  deleteProject(id: string) {
    return this.http.delete(`${this.CREATE_PROJECT}/${id}`);
  }

  editProject(body: IProject, id: string) {
    return this.http.put(`${this.CREATE_PROJECT}/${id}`, body);
  }
}
