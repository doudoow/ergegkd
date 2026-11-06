// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "维护大师",
  "id": "com.example.maintenancemaster",
  "groups": [
    {
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "priorityTime": 10000,
      "fastQuery": true,
      "quickFind": true,
      "order": -10,
      "key": 0,
      "rules": [
        {
          "matches": "[id=\"com.example.maintenancemaster:id/advertisement_countdown_ccd\"]",
          "snapshotUrls": "https://i.gkd.li/i/12903877",
          "key": 0
        },
        {
          "matches": "[vid=\"advertisement_countdown_ccd\"]",
          "snapshotUrls": "https://i.gkd.li/i/12903877",
          "key": 1
        }
      ]
    }
  ]
});
