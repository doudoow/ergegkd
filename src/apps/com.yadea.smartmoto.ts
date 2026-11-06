// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "雅迪智行",
  "id": "com.yadea.smartmoto",
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
          "matches": "[vid=\"tv_cancel\"]",
          "snapshotUrls": "https://i.gkd.li/i/30144136",
          "key": 0
        }
      ]
    }
  ]
});
