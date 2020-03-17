export enum LEDState {
    Red,
    Green,
    Yellow
}

export interface IDictionary<T> {
    [name: string]: T;
}

export interface LED {
    type: LEDState;
    state: boolean;
}

export interface TrafficLight {
    leds: LED[];
}

export interface TrafficLightState {
    trafficLights: TrafficLight[];
    duration: number; // in sec
}

export interface IntersectionConfig {
    pattern: TrafficLightState[];
    name: string;
}

export namespace Colors {
    export const RED = '#D30f02';
    export const YELLOW = '#F7C20E';
    export const GREEN = '#809507';
}