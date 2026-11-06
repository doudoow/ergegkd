// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "51CTO",
  "id": "com.cto51.student",
  "groups": [
    {
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 0,
      "rules": [
        {
          "matches": "@[vid=\"iv_close\"] - [vid=\"rl_ad\"][visibleToUser=true]",
          "activityIds": ".foundation.activities.MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/18308616",
          "exampleUrls": "https://e.gkd.li/b646bfb4-0d23-483e-b03e-f827f1c4b155",
          "key": 0
        }
      ]
    }
  ]
});
