// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "无线魔盒",
  "id": "cn.com.ruijie.magicbox",
  "groups": [
    {
      "name": "更新提示",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "order": -9,
      "key": 0,
      "rules": [
        {
          "matches": "@ImageView[id=\"cn.com.ruijie.magicbox:id/imageView_close\"] +(2) RelativeLayout > LinearLayout > [text*=\"新版本\"]",
          "activityIds": "cn.com.ruijie.wifibox.activity.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/12642359",
          "key": 0
        },
        {
          "matches": "@ImageView[vid=\"imageView_close\"] +(2) RelativeLayout > LinearLayout > [text*=\"新版本\"]",
          "activityIds": "cn.com.ruijie.wifibox.activity.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/12642359",
          "key": 1
        }
      ]
    }
  ]
});
