import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup, AbstractControl } from '@angular/forms';
import { TrafficLight, LEDState, LED, TrafficLightState, IntersectionConfig } from '../app.abstract';
import { UtilService } from '../util.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-custom-config',
  templateUrl: './custom-config.component.html',
  styleUrls: ['./custom-config.component.css']
})
export class CustomConfigComponent implements OnInit {
  public form: FormGroup;

  public trafficLights: TrafficLight[] = [];
  public states: TrafficLightState[] = [];

  @Output() newConfig = new EventEmitter<IntersectionConfig>();

  constructor(
    private formBuilder: FormBuilder,
    private utilService: UtilService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: new FormControl(null, [Validators.required]),
      lightCount: new FormControl(null, [Validators.required]),
    });
  }

  public onCountChange() {
    console.log(this.form.controls.lightCount.value);

    if (this.form.controls.lightCount.valid) {
      const newCount = this.form.controls.lightCount.value;
      const currentCount = this.trafficLights.length;
      if (currentCount > newCount) {
        this.trafficLights.splice(newCount, currentCount - newCount);
      } else if (currentCount < newCount) {
        for (let i = 0; i < (newCount - currentCount); i++) {
          this.trafficLights.push({
            leds: []
          });
        }
      }
    }
  }

  public addLED(tl: TrafficLight) {
    tl.leds.push({
      type: LEDState.Red,
      state: true
    });
    this.updateStates();
  }

  private updateStates() {
    this.states.forEach((state) => {
      state.trafficLights.forEach((light, index) => {
        if (light.leds.length < this.trafficLights[index].leds.length) {
          for (let i = light.leds.length; i < this.trafficLights[index].leds.length; i++) {
            light.leds.push({ type: this.trafficLights[index].leds[i].type, state: false });
          }
        } else if (light.leds.length > this.trafficLights[index].leds.length) {
          light.leds.splice(this.trafficLights[index].leds.length, light.leds.length - this.trafficLights[index].leds.length);
        }

        this.trafficLights[index].leds.forEach((led, j) => {
          light.leds[j].type = led.type;
        });
      });
    });
  }

  public toggleColor(led: LED) {
    switch (led.type) {
      case LEDState.Red:
        led.type = LEDState.Yellow;
        break;
      case LEDState.Yellow:
        led.type = LEDState.Green;
        break;
      case LEDState.Green:
        led.type = LEDState.Red;
        break;
    }
    this.updateStates();
  }

  public addState() {
    this.states.push({
      trafficLights: this.trafficLights.map((tl) => {
        return {
          leds: tl.leds.map(x => {
            const x2 = Object.assign({}, x);
            x2.state = false;
            return x2;
          })
        };
      }),
      duration: 0
    });
  }

  public toggleState(led: LED) {
    led.state = !led.state;
  }

  public submit() {
    this.form.controls.name.markAsTouched();
    this.form.controls.lightCount.markAsTouched();
    if (this.form.valid) {
      const config: IntersectionConfig = {
        name: this.form.controls.name.value,
        pattern: this.states
      };
      if (this.isValid(config)) {
        this.newConfig.emit(config);
        this.form.controls.name.patchValue(null);
        this.form.controls.lightCount.patchValue(null);
        this.trafficLights = [];
        this.states = [];
      }
    } else {
      this.utilService.error('Form has errors.');
    }
  }

  private isValid(config: IntersectionConfig): boolean {
    if (!config.pattern || config.pattern.length <= 0) {
      this.utilService.error('Invalid Config. Not enough states.');
      return false;
    }
    return true;
  }
}
