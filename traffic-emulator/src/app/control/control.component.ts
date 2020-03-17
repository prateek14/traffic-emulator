import { Component, OnInit } from '@angular/core';
import { IntersectionConfig, IDictionary } from '../app.abstract';

import configA from '../configs/configA.JSON';
import configB from '../configs/configB.JSON';
import { Router } from '@angular/router';
import { UtilService } from '../util.service';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent {

  private configs: IntersectionConfig[] = [configA, configB];
  public configDict: IDictionary<IntersectionConfig> = {};
  public keys: string[];

  constructor(
    private router: Router,
    private utilService: UtilService) {
    this.configs.forEach((config, index) => {
      const key = 'predef' + index;
      this.configDict[key] = config;
      this.utilService.setConfig(key, JSON.stringify(config));
    });
    this.keys = Object.keys(this.configDict);
  }

  public navigate(key: string) {
    this.router.navigate(['inter', key]);
  }
}
