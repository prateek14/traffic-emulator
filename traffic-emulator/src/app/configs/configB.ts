import { IntersectionConfig } from '../app.abstract';

export const configB: IntersectionConfig = {
    "name": "122",
    "pattern": [
        {
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
                            "type": 1,
                            "state": true
                        }
                    ]
                }
            ],
            "duration": 20
        },
        {
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
                            "type": 1,
                            "state": false
                        }
                    ]
                }
            ],
            "duration": 20
        },
        {
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
                            "type": 1,
                            "state": false
                        }
                    ]
                }
            ],
            "duration": 50
        },
        {
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
                            "type": 1,
                            "state": false
                        }
                    ]
                }
            ],
            "duration": 5
        }
    ]
};