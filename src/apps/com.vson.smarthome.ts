// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "小美智能",
  "id": "com.vson.smarthome",
  "groups": [
    {
      "name": "更新提示",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "[text^=\"发现新版本\"]",
          "action": "back",
          "snapshotUrls": "https://i.gkd.li/i/15526571",
          "key": 0
        }
      ]
    }
  ]
});
