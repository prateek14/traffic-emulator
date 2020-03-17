import { Component, OnInit } from '@angular/core';
import { IntersectionConfig, IDictionary } from '../app.abstract';

import { Router } from '@angular/router';
import { UtilService } from '../util.service';
import { configA } from '../configs/configA';
import { configB } from '../configs/configB';
import { configC } from '../configs/configC';
import { configD } from 'src/app/configs/configD';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent {

  private defaultConfigs: IntersectionConfig[] = [configA, configB, configC, configD];
  public configDict: IDictionary<IntersectionConfig> = {};
  public keys: string[];

  constructor(
    private router: Router,
    private utilService: UtilService) {

    this.configDict = this.utilService.getAllConfigs();
    if (!this.configDict) {
      this.configDict = {};
      this.defaultConfigs.forEach((config) => {
        const key = this.utilService.guid();
        this.configDict[key] = config;
        this.utilService.setConfig(key, JSON.stringify(config));
      });
    }

    this.keys = Object.keys(this.configDict);
  }

  public navigate(key: string) {
    this.router.navigate(['inter', key]);
  }

  public newConfig(config: IntersectionConfig) {
    const key = this.utilService.guid();
    this.configDict[key] = config;
    this.utilService.setConfig(key, JSON.stringify(config));
    this.keys = Object.keys(this.configDict);
    this.navigate(key);
  }
}
