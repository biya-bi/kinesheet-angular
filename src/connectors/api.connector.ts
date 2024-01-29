import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { Objective } from '../models/Objective';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiConnector {

  private readonly url = 'http://localhost:8080';

  constructor(private readonly httpClient: HttpClient, private readonly oAuthService: OAuthService) { }

  private getOptions() {
    return {
      headers: {
        Authorization: 'Bearer ' + this.oAuthService.getIdToken()
      }
    }
  }

  getObjectives(): Observable<Objective[]> {
    return this.httpClient.get<Objective[]>(this.url + '/objectives', this.getOptions());
  }

  getObjective(id: String): Observable<Objective> {
    return this.httpClient.get<Objective>(this.url + '/objectives/' + id, this.getOptions());
  }

  addObjective(objective: Objective): Observable<Objective> {
    return this.httpClient.post<Objective>(this.url + '/objectives', objective, this.getOptions());
  }


}
