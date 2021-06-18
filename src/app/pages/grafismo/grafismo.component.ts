import { Component, OnInit } from '@angular/core';
import { combineLatest } from 'rxjs';
import { GrafismoService } from './services/grafismo.service';


@Component({
  selector: 'app-grafismo',
  templateUrl: './grafismo.component.html',
  styleUrls: ['./grafismo.component.css']
})
export class GrafismoComponent implements OnInit {
  nickname: any;
  logo: any;
  photo: any;
  loading : boolean = true;


  constructor(public _grefismoService: GrafismoService) { }

  ngOnInit(): void {
   
    combineLatest([this._grefismoService.getPlayerIdMetrics(), 
                  this._grefismoService.getGlobalMetrics()])
      .subscribe(([playerData, globalData]) => {
        this._grefismoService.playerData =  playerData;
        this._grefismoService.globalData = globalData
    
      this.dataMap(playerData);
      this.loading = false;
    });

  }

  dataMap(playerData: any){
    this.nickname = playerData.player.nickname;
    this.logo =  playerData.team.logo.x2;
    this.photo = playerData.player.photo.x2

  }

}
