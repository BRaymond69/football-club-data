import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class FootballApiService {
  private standingsCache = new Map<string, any>();
  private teamsCache = new Map<string, any>();

  constructor(private http: HttpClient) {}

  getStandingsCached(code: string): Observable<any> {
    if (this.standingsCache.has(code)) {
      return of(this.standingsCache.get(code));
    }

    return this.http
      .get(`http://localhost:3000/standings/${code}`)
      .pipe(tap((data) => this.standingsCache.set(code, data)));
  }

  getTeamsCached(code: string): Observable<any> {
    if (this.teamsCache.has(code)) {
      return of(this.teamsCache.get(code));
    }
    return this.http
      .get(`http://localhost:3000/teams/${code}`)
      .pipe(tap((data) => this.teamsCache.set(code, data)));
  }

  getLiveMatches(date: string): Observable<any> {
    return this.http.get(`http://localhost:3000/matches?dateFrom=${date}`);
  }
}
