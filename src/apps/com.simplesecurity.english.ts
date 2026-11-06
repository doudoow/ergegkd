// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "水果派",
  "id": "com.simplesecurity.english",
  "groups": [
    {
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "priorityTime": 10000,
      "order": -10,
      "key": 0,
      "rules": [
        {
          "matches": "[text=\"关闭广告\"]",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/13447714",
          "exampleUrls": "https://e.gkd.li/8718ddc4-8775-482e-a259-bc43c7171fd8",
          "key": 0
        }
      ]
    }
  ]
});
