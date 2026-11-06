// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "ECOVACS HOME",
  "id": "com.eco.global.app",
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
          "matches": "ImageView[id=\"com.eco.global.app:id/adview_jump\"]",
          "snapshotUrls": "https://i.gkd.li/i/13538616",
          "key": 0
        },
        {
          "matches": "ImageView[vid=\"adview_jump\"]",
          "snapshotUrls": "https://i.gkd.li/i/13538616",
          "key": 1
        }
      ]
    }
  ]
});
