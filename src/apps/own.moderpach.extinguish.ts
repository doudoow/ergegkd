// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "Extinguish",
  "id": "own.moderpach.extinguish",
  "groups": [
    {
      "name": "功能类-自动点击[启动]",
      "key": 0,
      "rules": [
        {
          "matches": "Button - [text=\"启动\"] < [clickable=true]",
          "actionMaximum": 1,
          "activityIds": ".MainActivity",
          "resetMatch": "app",
          "snapshotUrls": "https://i.gkd.li/i/25821346",
          "exampleUrls": "https://e.gkd.li/b3054290-5f5e-4a12-ad60-e3b455c0425c",
          "key": 0
        }
      ]
    }
  ]
});
