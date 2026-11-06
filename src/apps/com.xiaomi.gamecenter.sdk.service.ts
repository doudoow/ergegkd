// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "小米游戏服务",
  "id": "com.xiaomi.gamecenter.sdk.service",
  "groups": [
    {
      "name": "更新提示",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "order": -9,
      "key": 0,
      "rules": [
        {
          "matches": "[text=\"升级提示\"] < * + [vid=\"btn_close\"]",
          "activityIds": "com.xiaomi.gamecenter.sdk.ui.actlayout.ViewUpgrade",
          "snapshotUrls": "https://i.gkd.li/i/14188929",
          "key": 0
        },
        {
          "matches": "[text=\"升级提示\"] < * + [vid=\"btn_close\"]",
          "key": 1
        }
      ]
    }
  ]
});
