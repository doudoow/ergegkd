// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "Hydro Coach",
  "id": "com.codium.hydrocoach",
  "groups": [
    {
      "name": "全屏广告-订阅推荐",
      "desc": "关闭每次开启时的订阅推荐",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 0,
      "rules": [
        {
          "matches": [
            "[text^=\"解鎖所有功能\"]",
            "[vid=\"close_button\"]"
          ],
          "activityIds": ".ui.pro.subscription.SubscribeActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/15806266",
          "exampleUrls": "https://e.gkd.li/7092a375-a9f0-4aca-b5b4-3386c71a0820",
          "key": 0
        }
      ]
    }
  ]
});
