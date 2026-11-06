// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "PICO",
  "id": "com.picovr.assistantphone",
  "groups": [
    {
      "name": "更新提示",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "matchRoot": true,
      "key": 0,
      "rules": [
        {
          "matches": "[vid=\"update_check_cancel_btn\"][visibleToUser=true]",
          "activityIds": ".ui.MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/20852432",
          "exampleUrls": "https://e.gkd.li/b63e9ce4-e333-4702-abd5-d2355f83da1f",
          "key": 0
        }
      ]
    }
  ]
});
