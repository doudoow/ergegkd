// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "ZAKER",
  "id": "com.myzaker.ZAKER_Phone",
  "groups": [
    {
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "actionMaximumKey": 0,
      "resetMatch": "app",
      "priorityTime": 10000,
      "fastQuery": true,
      "order": -10,
      "key": 0,
      "rules": [
        {
          "matches": "[text*=\"跳过\"][text.length<10][width<500 && height<300][visibleToUser=true]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/20689993",
          "exampleUrls": "https://e.gkd.li/0c69945f-ac0e-44a8-a0a3-95544e53849f"
        },
        {
          "matches": "[id=\"com.myzaker.ZAKER_Phone:id/cover_pic\"]",
          "position": {
            "left": "width * 0.9009",
            "top": "width * 0.075"
          },
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/13694552",
          "exampleUrls": "https://m.gkd.li/57941037/c140267a-a48a-45a9-9303-7507aa2008e4"
        },
        {
          "matches": "[vid=\"cover_pic\"]",
          "position": {
            "left": "width * 0.8871",
            "top": "width * 0.0851"
          },
          "snapshotUrls": "https://i.gkd.li/i/14958042",
          "key": 2
        },
        {
          "matches": "[vid=\"cover_pic\"]",
          "position": {
            "left": "width * 0.9009",
            "top": "width * 0.075"
          },
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/13694552",
          "exampleUrls": "https://m.gkd.li/57941037/c140267a-a48a-45a9-9303-7507aa2008e4"
        }
      ]
    }
  ]
});
