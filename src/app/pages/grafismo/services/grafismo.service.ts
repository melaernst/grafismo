import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GrafismoService {
  
  url = "https://streaming.lvp.global/api/stats?url=https://api.lvp.global/lol/v1/competitions/"
  competitionId = "a3141008-3e14-11eb-892c-065e1d3d7cd4";
  playerId = "0b7c856e-15e0-11e9-88c3-22000ac39d70";
  playerData: any;
  globalData: any;



  constructor(private http: HttpClient) { }

  getPlayersMetrics(){
    return this.http.get(`${this.url}${this.competitionId}/players`);
  }

  getPlayerIdMetrics(){
    return this.http.get(`${ this.url }${ this.competitionId }/players/${ this.playerId }`)
                    .pipe(
                        map((result: any) => result.data),
                        catchError(err => of(null))
                        );
  }

  getGlobalMetrics(){
    return this.http.get(`${this.url}${this.competitionId}/player-metrics-ladder`)
                    .pipe(
                        map((result: any) => result.data),
                        catchError(err => of(null))
                        );
  }

}
