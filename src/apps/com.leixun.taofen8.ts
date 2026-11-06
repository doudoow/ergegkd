// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "淘粉吧",
  "id": "com.leixun.taofen8",
  "groups": [
    {
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "order": -10,
      "key": 0,
      "rules": [
        {
          "matches": "@View[clickable=true] <<n [id=\"com.leixun.taofen8:id/fl_advert_container\"]",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/13937324",
          "key": 0
        }
      ]
    }
  ]
});
