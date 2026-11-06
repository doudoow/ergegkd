// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "青创网",
  "id": "com.m17qcc.mm",
  "groups": [
    {
      "name": "更新提示",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 0,
      "rules": [
        {
          "matches": "[text*=\"新版本\"] +(n) LinearLayout > TextView[text=\"取消\"]",
          "activityIds": "miuix.appcompat.app.m",
          "snapshotUrls": "https://i.gkd.li/i/12642297",
          "key": 0
        },
        {
          "matches": "[text*=\"新版本\"] +(n) LinearLayout > TextView[text=\"取消\"]",
          "key": 1
        }
      ]
    },
    {
      "name": "更新弹窗",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": "[text*=\"新版本\"] +(n) LinearLayout > TextView[text=\"取消\"]",
          "key": 0
        }
      ]
    }
  ]
});
