// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "水果派",
  "id": "com.oneshareclap.malaysian",
  "groups": [
    {
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "priorityTime": 10000,
      "fastQuery": true,
      "order": -10,
      "key": 0,
      "rules": [
        {
          "matches": "[text=\"关闭广告\"]",
          "snapshotUrls": "https://i.gkd.li/i/14275367",
          "key": 0
        }
      ]
    }
  ]
});
