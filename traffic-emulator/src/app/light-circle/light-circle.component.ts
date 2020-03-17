import { Component, Input, OnChanges } from '@angular/core';
import { LED, LEDState } from 'src/app/app.abstract';
import { UtilService } from '../util.service';

@Component({
  selector: 'light-circle',
  templateUrl: './light-circle.component.html',
  styleUrls: ['./light-circle.component.css']
})
export class LightCircleComponent implements OnChanges {

  @Input() state: boolean;
  @Input() type: LEDState;

  color: string;

  constructor(private utilService: UtilService) { }

  ngOnChanges() {
    this.color = this.utilService.getColor(this.type);
  }
}
