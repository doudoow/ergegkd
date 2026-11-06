// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "水果派",
  "id": "com.ruYUVE.bgGRHf",
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
          "matches": "[desc=\"关闭广告\"]",
          "action": "clickCenter",
          "forcedTime": 10000,
          "snapshotUrls": "https://i.gkd.li/i/14667107",
          "key": 0
        }
      ]
    }
  ]
});
