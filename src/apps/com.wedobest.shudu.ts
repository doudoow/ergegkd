// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "数独",
  "id": "com.wedobest.shudu",
  "groups": [
    {
      "name": "局部广告",
      "desc": "x掉",
      "key": 0,
      "rules": [
        {
          "matches": "@Button[clickable=true] +2 [text=\"广告\"][visibleToUser=true]",
          "activityIds": ".GameAct",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/24967577",
          "key": 0
        }
      ]
    }
  ]
});
