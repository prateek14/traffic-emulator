import { IntersectionConfig } from '../app.abstract';

export const configA: IntersectionConfig = {
    "name": "3 Way intersection with Turn",
    "pattern": [
        {
            "duration": 10,
            "trafficLights": [
                {
                    "leds": [
                        {
                            "type": 0,
                            "state": false
                        },
                        {
                            "type": 2,
                            "state": false
                        },
                        {
                            "type": 1,
                            "state": true
                        },
                        {
                            "type": 1,
                            "state": true
                        }
                    ]
                },
                {
                    "leds": [
                        {
                            "type": 0,
                            "state": true
                        },
                        {
                            "type": 2,
                            "state": false
                        },
                        {
                            "type": 1,
                            "state": false
                        }
                    ]
                },
                {
                    "leds": [
                        {
                            "type": 0,
                            "state": true
                        },
                        {
                            "type": 2,
                            "state": false
                        },
                        {
                            "type": 1,
                            "state": false
                        }
                    ]
                }
            ]
        },
        {
            "duration": 2,
            "trafficLights": [
                {
                    "leds": [
                        {
                            "type": 0,
                            "state": false
                        },
                        {
                            "type": 2,
                            "state": true
                        },
                        {
                            "type": 1,
                            "state": false
                        },
                        {
                            "type": 1,
                            "state": false
                        }
                    ]
                },
                {
                    "leds": [
                        {
                            "type": 0,
                            "state": true
                        },
                        {
                            "type": 2,
                            "state": false
                        },
                        {
                            "type": 1,
                            "state": false
                        }
                    ]
                },
                {
                    "leds": [
                        {
                            "type": 0,
                            "state": true
                        },
                        {
                            "type": 2,
                            "state": false
                        },
                        {
                            "type": 1,
                            "state": false
                        }
                    ]
                }
            ]
        },
        {
            "duration": 10,
            "trafficLights": [
                {
                    "leds": [
                        {
                            "type": 0,
                            "state": true
                        },
                        {
                            "type": 2,
                            "state": false
                        },
                        {
                            "type": 1,
                            "state": false
                        },
                        {
                            "type": 1,
                            "state": false
                        }
                    ]
                },
                {
                    "leds": [
                        {
                            "type": 0,
                            "state": false
                        },
                        {
                            "type": 2,
                            "state": false
                        },
                        {
                            "type": 1,
                            "state": true
                        }
                    ]
                },
                {
                    "leds": [
                        {
                            "type": 0,
                            "state": true
                        },
                        {
                            "type": 2,
                            "state": false
                        },
                        {
                            "type": 1,
                            "state": false
                        }
                    ]
                }
            ]
        },
        {
            "duration": 2,
            "trafficLights": [
                {
                    "leds": [
                        {
                            "type": 0,
                            "state": true
                        },
                        {
                            "type": 2,
                            "state": false
                        },
                        {
                            "type": 1,
                            "state": false
                        },
                        {
                            "type": 1,
                            "state": false
                        }
                    ]
                },
                {
                    "leds": [
                        {
                            "type": 0,
                            "state": false
                        },
                        {
                            "type": 2,
                            "state": true
                        },
                        {
                            "type": 1,
                            "state": false
                        }
                    ]
                },
                {
                    "leds": [
                        {
                            "type": 0,
                            "state": true
                        },
                        {
                            "type": 2,
                            "state": false
                        },
                        {
                            "type": 1,
                            "state": false
                        }
                    ]
                }
            ]
        },
        {
            "duration": 5,
            "trafficLights": [
                {
                    "leds": [
                        {
                            "type": 0,
                            "state": true
                        },
                        {
                            "type": 2,
                            "state": false
                        },
                        {
                            "type": 1,
                            "state": false
                        },
                        {
                            "type": 1,
                            "state": false
                        }
                    ]
                },
                {
                    "leds": [
                        {
                            "type": 0,
                            "state": true
                        },
                        {
                            "type": 2,
                            "state": false
                        },
                        {
                            "type": 1,
                            "state": false
                        }
                    ]
                },
                {
                    "leds": [
                        {
                            "type": 0,
                            "state": false
                        },
                        {
                            "type": 2,
                            "state": false
                        },
                        {
                            "type": 1,
                            "state": true
                        }
                    ]
                }
            ]
        },
        {
            "duration": 2,
            "trafficLights": [
                {
                    "leds": [
                        {
                            "type": 0,
                            "state": true
                        },
                        {
                            "type": 2,
                            "state": false
                        },
                        {
                            "type": 1,
                            "state": false
                        },
                        {
                            "type": 1,
                            "state": false
                        }
                    ]
                },
                {
                    "leds": [
                        {
                            "type": 0,
                            "state": true
                        },
                        {
                            "type": 2,
                            "state": false
                        },
                        {
                            "type": 1,
                            "state": false
                        }
                    ]
                },
                {
                    "leds": [
                        {
                            "type": 0,
                            "state": false
                        },
                        {
                            "type": 2,
                            "state": true
                        },
                        {
                            "type": 1,
                            "state": false
                        }
                    ]
                }
            ]
        }
    ]
};