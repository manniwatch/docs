define({ "api": [
  {
    "type": "get",
    "url": "/geo/vehicles",
    "title": "Request vehicle locations",
    "name": "GetVehicleLocations",
    "group": "Geo",
    "query": [
      {
        "group": "Query",
        "type": "string",
        "allowedValues": [
          "\"RAW\"",
          "\"CORRECTED\""
        ],
        "optional": true,
        "field": "mode",
        "defaultValue": "RAW",
        "description": "<p>Departure Mode to Query</p>"
      },
      {
        "group": "Query",
        "type": "number",
        "optional": true,
        "field": "lastUpdate",
        "defaultValue": "0",
        "description": "<p>Get updates since this point in time</p>"
      }
    ],
    "version": "0.1.0",
    "filename": "src/endpoints/geo/router.ts",
    "groupTitle": "Geo"
  },
  {
    "type": "get",
    "url": "/geo/stops",
    "title": "Request stop locations",
    "name": "StopLocations",
    "group": "Geo",
    "query": [
      {
        "group": "Query",
        "type": "number",
        "optional": false,
        "field": "bottom",
        "description": "<p>Bottom Geo Border</p>"
      },
      {
        "group": "Query",
        "type": "number",
        "optional": false,
        "field": "left",
        "description": "<p>Left Geo Border</p>"
      },
      {
        "group": "Query",
        "type": "number",
        "optional": false,
        "field": "right",
        "description": "<p>Right Geo Border</p>"
      },
      {
        "group": "Query",
        "type": "number",
        "optional": false,
        "field": "top",
        "description": "<p>Top Geo Border</p>"
      }
    ],
    "version": "0.1.0",
    "filename": "src/endpoints/geo/router.ts",
    "groupTitle": "Geo"
  },
  {
    "type": "get",
    "url": "/geo/stopPoints",
    "title": "Request stop locations",
    "name": "StopPointLocations",
    "group": "Geo",
    "query": [
      {
        "group": "Query",
        "type": "number",
        "optional": false,
        "field": "bottom",
        "description": "<p>Bottom Geo Border</p>"
      },
      {
        "group": "Query",
        "type": "number",
        "optional": false,
        "field": "left",
        "description": "<p>Left Geo Border</p>"
      },
      {
        "group": "Query",
        "type": "number",
        "optional": false,
        "field": "right",
        "description": "<p>Right Geo Border</p>"
      },
      {
        "group": "Query",
        "type": "number",
        "optional": false,
        "field": "top",
        "description": "<p>Top Geo Border</p>"
      }
    ],
    "version": "0.4.0",
    "filename": "src/endpoints/geo/router.ts",
    "groupTitle": "Geo"
  },
  {
    "type": "get",
    "url": "/settings",
    "title": "Request Trapeze Settings",
    "name": "GetSettings",
    "group": "Settings",
    "version": "0.1.0",
    "filename": "src/endpoints/settings.ts",
    "groupTitle": "Settings"
  },
  {
    "type": "get",
    "url": "/stop/:id/info",
    "title": "Request Stop Info",
    "name": "GetStopInfo",
    "group": "Stop",
    "parameter": {
      "fields": {
        "Path Parameters": [
          {
            "group": "Path Parameters",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Stop id</p>"
          }
        ]
      }
    },
    "version": "0.1.0",
    "filename": "src/endpoints/stop.ts",
    "groupTitle": "Stop"
  },
  {
    "type": "get",
    "url": "/stop/:id/passages",
    "title": "Request Stop Passages",
    "name": "GetStopPassages",
    "group": "Stop",
    "parameter": {
      "fields": {
        "Path Parameters": [
          {
            "group": "Path Parameters",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>Stop id</p>"
          }
        ]
      }
    },
    "query": [
      {
        "group": "Query",
        "type": "string",
        "allowedValues": [
          "\"arrival\"",
          "\"departure\""
        ],
        "optional": false,
        "field": "mode",
        "defaultValue": "departure",
        "description": "<p>Departure Mode to Query</p>"
      },
      {
        "group": "Query",
        "type": "string",
        "optional": false,
        "field": "startTime",
        "description": "<p>Start time to query</p>"
      },
      {
        "group": "Query",
        "type": "string",
        "optional": false,
        "field": "timeFrame",
        "description": "<p>Time frame to query</p>"
      }
    ],
    "version": "0.1.0",
    "filename": "src/endpoints/stop.ts",
    "groupTitle": "Stop"
  },
  {
    "type": "get",
    "url": "/stopPoint/:id/passages",
    "title": "Request StopPoint Passages",
    "name": "GetStopPointPassages",
    "group": "Stop",
    "parameter": {
      "fields": {
        "Path Parameters": [
          {
            "group": "Path Parameters",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>Stop id</p>"
          }
        ]
      }
    },
    "query": [
      {
        "group": "Query",
        "type": "string",
        "allowedValues": [
          "\"arrival\"",
          "\"departure\""
        ],
        "optional": false,
        "field": "mode",
        "defaultValue": "departure",
        "description": "<p>Departure Mode to Query</p>"
      },
      {
        "group": "Query",
        "type": "string",
        "optional": false,
        "field": "startTime",
        "description": "<p>Start time to query</p>"
      },
      {
        "group": "Query",
        "type": "string",
        "optional": false,
        "field": "timeFrame",
        "description": "<p>Time frame to query</p>"
      }
    ],
    "version": "0.6.0",
    "filename": "src/endpoints/stop-point.ts",
    "groupTitle": "Stop"
  },
  {
    "type": "get",
    "url": "/stopPoint/:id/info",
    "title": "Request stop point info",
    "name": "StopPointInfo",
    "group": "StopPoint",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Stop Point ID</p>"
          }
        ]
      }
    },
    "version": "1.5.0",
    "filename": "src/endpoints/stop-point.ts",
    "groupTitle": "StopPoint"
  },
  {
    "type": "get",
    "url": "/trip/:id/passages",
    "title": "Request Trip Passages",
    "name": "GetTripPassages",
    "group": "Trip",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>Vehicle id</p>"
          }
        ]
      }
    },
    "query": [
      {
        "group": "Query",
        "type": "string",
        "allowedValues": [
          "\"arrival\"",
          "\"departure\""
        ],
        "optional": true,
        "field": "departureMode",
        "defaultValue": "departure",
        "description": "<p>Default departure mode</p>"
      }
    ],
    "version": "0.5.0",
    "filename": "src/endpoints/trip.ts",
    "groupTitle": "Trip"
  },
  {
    "type": "get",
    "url": "/trip/:id/route",
    "title": "Request Vehicle Route",
    "name": "GetTripRoute",
    "group": "Trip",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Vehicle id</p>"
          }
        ]
      }
    },
    "version": "0.1.0",
    "filename": "src/endpoints/trip.ts",
    "groupTitle": "Trip"
  },
  {
    "type": "get",
    "url": "/vehicle/:id/route",
    "title": "Request Vehicle Route",
    "name": "GetVehicleRoute",
    "group": "Vehicle",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Vehicle id</p>"
          }
        ]
      }
    },
    "version": "1.5.0",
    "filename": "src/endpoints/vehicle.ts",
    "groupTitle": "Vehicle"
  }
] });
