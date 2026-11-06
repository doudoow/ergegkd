// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "币安",
  "id": "com.binance.dev",
  "groups": [
    {
      "name": "更新提示",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "@[clickable=true] + [vid=\"tv_title\"][text=\"发现新版本\"]",
          "activityIds": "com.eaas.launcher.activities.main.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/24257907",
          "exampleUrls": "https://e.gkd.li/3ebed425-8801-4d70-9bcf-5c9fa61890ca",
          "key": 0
        }
      ]
    }
  ]
});
