// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "Fing",
  "id": "com.overlook.android.fing",
  "groups": [
    {
      "name": "其他-教程弹窗",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "[text=\"關閉\"]",
          "activityIds": ".ui.main.SplashActivity",
          "snapshotUrls": "https://i.gkd.li/i/15521827",
          "key": 0
        }
      ]
    }
  ]
});
