import { Component, OnInit, OnDestroy } from '@angular/core';
import { TrafficLightState, IntersectionConfig } from 'src/app/app.abstract';

// import configA from '../configs/configA.JSON';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-intersection',
  templateUrl: './intersection.component.html',
  styleUrls: ['./intersection.component.css']
})
export class IntersectionComponent implements OnInit, OnDestroy {

  config: IntersectionConfig = null;

  currentStateIndex = -1;
  currentState: TrafficLightState;
  protected subs: Subscription[] = [];

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {

    this.subs.push(
      this.route.data.subscribe((d: Data) => {
        this.config = d['config'];
        this.changeState();
      }));
  }

  ngOnDestroy() {
    this.subs.forEach(s => {
      s.unsubscribe();
    });
  }

  private changeState() {
    this.currentStateIndex = this.currentStateIndex + 1;
    if (this.currentStateIndex === this.config.pattern.length) {
      this.currentStateIndex = 0;
    }

    this.currentState = this.config.pattern[this.currentStateIndex];
    setTimeout(() => {
      this.changeState();
    }, this.currentState.duration * 1000)
  }
}
