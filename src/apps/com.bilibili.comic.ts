// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "哔哩哔哩漫画",
  "id": "com.bilibili.comic",
  "groups": [
    {
      "name": "青少年模式",
      "enable": false,
      "matchTime": 15000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "[id=\"com.bilibili.comic:id/tv_know\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "青少年模式弹窗",
      "enable": false,
      "matchTime": 15000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "quickFind": true,
      "key": 1,
      "rules": [
        {
          "matches": "[id=\"com.bilibili.comic:id/tv_know\"]",
          "key": 0
        }
      ]
    }
  ]
});
