// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "慢慢买",
  "id": "com.manmanbuy.bijia",
  "groups": [
    {
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "priorityTime": 10000,
      "fastQuery": true,
      "quickFind": true,
      "order": -10,
      "key": 0,
      "rules": [
        {
          "matches": "[text^=\"关闭\"][text.length=4]",
          "snapshotUrls": "https://i.gkd.li/i/13214974",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-从剪贴板查历史价-拒绝",
      "desc": "点击[默默拒绝]",
      "key": 1,
      "rules": [
        {
          "matches": "@[clickable=true] > [text=\"默默拒绝\"]",
          "activityIds": ".MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/25073813",
          "exampleUrls": "https://e.gkd.li/73a7e5bb-35e1-4025-bfca-8f2714d1a58a",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-弹窗广告",
      "key": 2,
      "rules": [
        {
          "matches": "@[clickable=true] >2 TextView[text=\"\"]",
          "activityIds": ".MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/28312474",
          "key": 0
        }
      ]
    }
  ]
});
