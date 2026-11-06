// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "盒马",
  "id": "com.wudaokou.hippo",
  "groups": [
    {
      "name": "全屏广告",
      "desc": "点击关闭",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 0,
      "rules": [
        {
          "matches": "[vid=\"home_pop_close\"][visibleToUser=true]",
          "activityIds": ".launcher.splash.SplashActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/22988411",
          "exampleUrls": "https://e.gkd.li/7719d496-8331-4ddd-996d-5e1b5a88d7b7",
          "key": 0
        }
      ]
    }
  ]
});
