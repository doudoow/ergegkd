// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "搜索",
  "id": "com.android.quicksearchbox",
  "groups": [
    {
      "name": "局部广告-卡片广告",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "[vid=\"ad_close\"]",
          "activityIds": ".SearchActivityTransparent",
          "snapshotUrls": "https://i.gkd.li/i/13897834",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-广告卡片",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "quickFind": true,
      "key": 1,
      "rules": [
        {
          "matches": "[vid=\"ad_close\"]",
          "key": 0
        }
      ]
    }
  ]
});
