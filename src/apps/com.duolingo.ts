// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "Duolingo",
  "id": "com.duolingo",
  "groups": [
    {
      "name": "全屏广告-试用会员",
      "desc": "点击[算了吧]",
      "key": 0,
      "rules": [
        {
          "matches": "[text=\"算了吧\"][clickable=true]",
          "activityIds": ".splash.LaunchActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/30885277",
          "exampleUrls": "https://e.gkd.li/366f8f0e-fbfe-4892-8fc6-84ab44e4230a",
          "key": 0
        }
      ]
    }
  ]
});
