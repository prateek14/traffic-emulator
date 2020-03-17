import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { IntersectionComponent } from './intersection/intersection.component';
import { LightCircleComponent } from './light-circle/light-circle.component';
import { CountdownComponent } from './countdown/countdown.component';
import { CountdownModule } from 'ngx-countdown';
import { IntersectionConfigResolver } from 'src/app/services/config.resolver.service';
import { ControlComponent } from './control/control.component';
import { CustomConfigComponent } from './custom-config/custom-config.component';
import { MaterialModule } from 'src/app/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    IntersectionComponent,
    LightCircleComponent,
    CountdownComponent,
    ControlComponent,
    CustomConfigComponent
  ],
  imports: [
    BrowserModule, 
    BrowserAnimationsModule,
    CountdownModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path: 'inter/:configId',
        resolve: {
          config: IntersectionConfigResolver
        },
        component: IntersectionComponent,
      }, {
        path: '',
        component: ControlComponent,
      }
    ], {
        useHash: true,
        paramsInheritanceStrategy: 'always',
        onSameUrlNavigation: 'reload'
      })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }