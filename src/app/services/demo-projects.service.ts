import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DemoProjectsService {
  projectsUrl =
    'https://portfolio-sm-80277-default-rtdb.firebaseio.com/projects';
  jsonEXIT = '.json';

  constructor(private http: HttpClient) {}

  //get projects from db
  getProjects(): Observable<any> {
    return this.http.get<any>(`${this.projectsUrl}${this.jsonEXIT}`);
  }
}
