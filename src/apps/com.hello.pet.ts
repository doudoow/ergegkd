// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "街猫",
  "id": "com.hello.pet",
  "groups": [
    {
      "name": "权限提示-通知权限",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "[text^=\"开启通知\"] +2 [text=\"取消\"]",
          "snapshotUrls": "https://i.gkd.li/i/14622639",
          "key": 0
        }
      ]
    },
    {
      "name": "通知提示-请求开启通知权限弹窗",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "[text^=\"开启通知\"] +2 [text=\"取消\"]",
          "key": 0
        }
      ]
    }
  ]
});
