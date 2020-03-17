import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { IntersectionConfig } from '../app.abstract';
import { Observable, of } from 'rxjs';

import { UtilService } from '../util.service';
import { configA } from '../configs/configA';

@Injectable({
  providedIn: 'root'
})
export class IntersectionConfigResolver implements Resolve<IntersectionConfig> {

  constructor(private utilService: UtilService) { }

  resolve(route: ActivatedRouteSnapshot, ): Observable<IntersectionConfig> {

    const data = route.parent.data;

    if (route.paramMap.has('configId')) {
      const configStr = this.utilService.getConfig(
        route.paramMap.get('configId'),
        null);
      if (configStr) {
        const config = JSON.parse(configStr) as IntersectionConfig;
        return of(config);
      }
    }

    return of(configA);
  }
}
