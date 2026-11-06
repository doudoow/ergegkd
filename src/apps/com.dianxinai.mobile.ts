// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "点心云",
  "id": "com.dianxinai.mobile",
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
          "matches": "[text$=\"s\"][text.length=2]",
          "snapshotUrls": "https://i.gkd.li/i/16115075",
          "key": 0
        },
        {
          "matches": "@ViewGroup[clickable = true] > TextView[text $=\"s\" && text.length=2]",
          "key": 1
        }
      ]
    }
  ]
});
