// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "Qwen Studio",
  "id": "ai.qwenlm.chat.android",
  "groups": [
    {
      "name": "更新提示",
      "desc": "x掉",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 0,
      "rules": [
        {
          "matches": "[desc=\"cancel\"] < @[clickable=true] + [visibleToUser=true][text=\"立即升级 Qwen\"]",
          "activityIds": ".MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/34112907",
          "exampleUrls": "https://e.gkd.li/c60a3f3b-15bb-4d2f-95b8-4723d0b9f57e",
          "key": 0
        }
      ]
    }
  ]
});
