import { Component, OnInit } from '@angular/core';
import { GrafismoService } from '../../services/grafismo.service';

@Component({
  selector: 'app-metrics',
  templateUrl: './metrics.component.html',
  styleUrls: ['./metrics.component.css']
})
export class MetricsComponent implements OnInit {

  metrics = [
    {
      'metric': "",
      'playerValue': 0,
      'globalValue':0

    }
  ]

  constructor(private _grafismoService: GrafismoService) { }

  ngOnInit(): void {
    this.dataMap(this._grafismoService.playerData, this._grafismoService.globalData)
      
  }

  dataMap(playerData: any, globalData: any){

    this.metrics = [
      {
        'metric': "KDA",
        'playerValue': playerData.metrics.kda,
        'globalValue': globalData.kda
  
      },
      {
        'metric': "CS/MIN",
        'playerValue': playerData.metrics.creepsPerMinute,
        'globalValue': globalData.creepsPerMinute
  
      },
      {
        'metric': "GOLD/MIN",
        'playerValue': playerData.metrics.goldPerMinute,
        'globalValue': globalData.goldPerMinute
  
      },
      {
        'metric': "DMG/MIN",
        'playerValue': playerData.metrics.damagePerMinute,
        'globalValue': globalData.damagePerMinute
  
      }
    ]
  }

}
