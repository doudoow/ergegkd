// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "爱奇艺极速版",
  "id": "com.qiyi.video.lite",
  "groups": [
    {
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "priorityTime": 10000,
      "fastQuery": true,
      "order": -10,
      "key": 0,
      "rules": [
        {
          "matches": "@[clickable=true] >2 [text=\"关闭\"]",
          "snapshotUrls": "https://i.gkd.li/i/13797162",
          "key": 0
        },
        {
          "matches": "[text*=\"关闭\"] <2 LinearLayout",
          "key": 1
        }
      ]
    }
  ]
});
