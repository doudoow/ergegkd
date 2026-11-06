// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "乐康守护",
  "id": "com.ecellsz.watch.guard",
  "groups": [
    {
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "quickFind": true,
      "order": -10,
      "key": 0,
      "rules": [
        {
          "matches": "View[clickable=true] <<n [vid=\"splash_container\"]",
          "key": 0
        }
      ]
    }
  ]
});
