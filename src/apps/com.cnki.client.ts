// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "手机知网",
  "id": "com.cnki.client",
  "groups": [
    {
      "name": "更新提示",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "order": -9,
      "key": 0,
      "rules": [
        {
          "matches": "[id=\"com.cnki.client:id/update_undo\"]",
          "activityIds": ".core.tramp.SplashActivity",
          "snapshotUrls": "https://i.gkd.li/i/12854857",
          "key": 0
        },
        {
          "matches": "[id=\"com.cnki.client:id/update_undo\"]",
          "key": 1
        },
        {
          "matches": "[vid=\"update_undo\"]",
          "activityIds": ".core.tramp.SplashActivity",
          "snapshotUrls": "https://i.gkd.li/i/12854857",
          "key": 2
        }
      ]
    },
    {
      "name": "更新弹窗",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": "[id=\"com.cnki.client:id/update_undo\"]",
          "key": 0
        }
      ]
    }
  ]
});
