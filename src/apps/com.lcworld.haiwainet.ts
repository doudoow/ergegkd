// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "人民日报海外版",
  "id": "com.lcworld.haiwainet",
  "groups": [
    {
      "name": "局部广告-悬浮广告",
      "desc": "点击关闭",
      "key": 0,
      "rules": [
        {
          "matches": "[vid=\"iv_paper_close\"]",
          "actionMaximum": 1,
          "activityIds": ".ui.main.MainActivity",
          "matchTime": 10000,
          "fastQuery": true,
          "resetMatch": "app",
          "snapshotUrls": "https://i.gkd.li/i/17089256",
          "exampleUrls": "https://e.gkd.li/021a457e-6c55-4ec6-b2f2-85b33a93c5b6",
          "key": 0
        }
      ]
    }
  ]
});
