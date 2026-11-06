// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "Luka阅读养成",
  "id": "ai.ling.luka.app",
  "groups": [
    {
      "name": "权限提示-通知权限",
      "desc": "点击[取消]",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": [
            "[text=\"通知服务未开启\"]",
            "[text=\"取消\"]"
          ],
          "activityIds": ".page.activity.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/15796616",
          "key": 0
        }
      ]
    }
  ]
});
