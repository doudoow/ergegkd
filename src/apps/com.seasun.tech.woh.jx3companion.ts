// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "推栏",
  "id": "com.seasun.tech.woh.jx3companion",
  "groups": [
    {
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "priorityTime": 10000,
      "order": -10,
      "key": 0,
      "rules": [
        {
          "matches": "@[clickable=true] > [text*=\"跳过\"][text.length<10][width<500 && height<300][visibleToUser=true]",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/18730361",
          "exampleUrls": "https://e.gkd.li/3314ff0b-9218-4712-9ae9-b820029e356a",
          "key": 0
        }
      ]
    }
  ]
});
