var APP_DATA = {
  "scenes": [
    {
      "id": "0-mansion",
      "name": "Mansion",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "yaw": -0.31292302691106144,
        "pitch": -0.008659201753751233,
        "fov": 1.4915768020449618
      },
      "linkHotspots": [
        {
          "yaw": -0.280629583223563,
          "pitch": 0.07892871148291114,
          "rotation": 0,
          "target": "1-living-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-living-room",
      "name": "Living room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.9545879265607482,
          "pitch": 0.06731664716156516,
          "rotation": 9.42477796076938,
          "target": "2-living-room--kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-living-room--kitchen",
      "name": "Living room & kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.3920496234180728,
          "pitch": 0.09710798659023645,
          "rotation": 9.42477796076938,
          "target": "3-fireplace"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-fireplace",
      "name": "Fireplace",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.5923269117309946,
          "pitch": 0.1277731131213109,
          "rotation": 2.356194490192345,
          "target": "3-fireplace"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
