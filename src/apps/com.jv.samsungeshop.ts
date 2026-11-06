// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "三星商城",
  "id": "com.jv.samsungeshop",
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
          "matches": "[desc=\"跳过\"][desc.length<10][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/23288756",
          "exampleUrls": "https://e.gkd.li/65cbe48e-843e-4dba-a53b-5f6598a2b409",
          "key": 0
        }
      ]
    }
  ]
});
