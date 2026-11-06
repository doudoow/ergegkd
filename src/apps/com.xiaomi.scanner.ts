// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "小爱视觉",
  "id": "com.xiaomi.scanner",
  "groups": [
    {
      "name": "更新提示",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "@[text=\"以后再说\"] + [text=\"立即更新\"]",
          "activityIds": ".app.ScanActivity",
          "snapshotUrls": "https://i.gkd.li/i/14332513",
          "key": 0
        }
      ]
    }
  ]
});
