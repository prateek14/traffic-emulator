import { Injectable } from '@angular/core';
import { LEDState, Colors } from './app.abstract';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor(
    private snackbar: MatSnackBar,
  ) { }

  public getColor(type: LEDState): string {
    switch (type) {
      case LEDState.Red:
        return Colors.RED;
      case LEDState.Yellow:
        return Colors.YELLOW;
      case LEDState.Green:
        return Colors.GREEN;
    }
  }

  public getConfig(key: string, defaultValue: string) {
    const configs = this.getLocalStorage('configs', null);
    if (configs) {
      const configDict = JSON.parse(configs);
      if (configDict[key]) {
        return configDict[key];
      }
    }
    return defaultValue;
  }

  public setConfig(key: string, value: string) {
    let configs = this.getLocalStorage('configs', null);
    if (!configs) {
      configs = "{}";
    }
    if (configs) {
      const configDict = JSON.parse(configs);
      configDict[key] = value;
      this.setLocalStorage('configs', JSON.stringify(configDict));
    }
  }

  private getLocalStorage(key: string, defaultValue: string): string {
    if (localStorage) {
      if (localStorage.getItem(key)) {
        return localStorage.getItem(key);
      }
    } else {
      console.log('Local storage not available');
    }
    return defaultValue;
  }

  private setLocalStorage(key: string, s: string) {
    if (localStorage) {
      localStorage.setItem(key, s);
    } else {
      console.log('Local storage not available');
    }
  }

  public success(message: string, duration: number = 1500) {
    this.snackbar.open(message, null, {
      panelClass: 'success',
      duration
    });
  }

  public error(message: string) {
    this.snackbar.open(message, null, {
      panelClass: 'error-bg-color',
      duration: 2000
    });
  }

  public guid(): string {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return (
      s4() +
      s4() +
      '-' +
      s4() +
      '-' +
      s4() +
      '-' +
      s4() +
      '-' +
      s4() +
      s4() +
      s4()
    );
  }
}
