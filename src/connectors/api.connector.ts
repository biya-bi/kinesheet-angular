import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { Observable } from 'rxjs';
import { Objective } from '../models/objective';

@Injectable({
  providedIn: 'root'
})
export class ApiConnector {

  private readonly url = 'http://localhost:8080';
  private readonly objectiveEndpoint = this.url + '/objectives';

  constructor(private readonly httpClient: HttpClient, private readonly oAuthService: OAuthService) { }

  private getOptions() {
    return {
      headers: {
        Authorization: 'Bearer ' + this.oAuthService.getIdToken()
      }
    }
  }

  getObjectives(): Observable<Objective[]> {
    return this.httpClient.get<Objective[]>(this.objectiveEndpoint, this.getOptions());
  }

  getObjective(id: string): Observable<Objective> {
    return this.httpClient.get<Objective>(this.getObjectiveIdEndpoint(id), this.getOptions());
  }

  addObjective(objective: Objective): Observable<Objective> {
    return this.httpClient.post<Objective>(this.objectiveEndpoint, objective, this.getOptions());
  }

  editObjective(objective: Objective): Observable<Objective> {
    return this.httpClient.put<Objective>(this.getObjectiveIdEndpoint(objective.id), objective, this.getOptions());
  }

  deleteObjective(id: string): Observable<void> {
    return this.httpClient.delete<void>(this.getObjectiveIdEndpoint(id), this.getOptions());
  }

  private getObjectiveIdEndpoint(id: string): string {
    return this.objectiveEndpoint + '/' + id;
  }

}
