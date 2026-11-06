// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "搜狗输入法",
  "id": "com.sohu.inputmethod.sogou",
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
          "matches": "@[clickable=true] > [text=\"跳过\"][text.length<10][visibleToUser=true]",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/20138053",
          "exampleUrls": "https://e.gkd.li/d310d2a0-4795-421d-82da-f3855fb7288b",
          "key": 0
        },
        {
          "matches": "@[clickable=true][text^=\"跳过\"] - [text=\"广告\"][text.length<10][visibleToUser=true]",
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/25897923",
          "exampleUrls": "https://e.gkd.li/aa7e78f0-0cfe-490d-8d41-f3e41b906610"
        }
      ]
    }
  ]
});
