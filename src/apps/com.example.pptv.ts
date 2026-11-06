// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "人人视频",
  "id": "com.example.pptv",
  "groups": [
    {
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "actionMaximumKey": 0,
      "resetMatch": "app",
      "priorityTime": 10000,
      "fastQuery": true,
      "quickFind": true,
      "order": -10,
      "key": 0,
      "rules": [
        {
          "matches": "[text*=\"跳过\"][text.length<=10]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/13669401"
        },
        {
          "matches": "[id=\"com.example.pptv:id/view_count_shake\"]",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/13761160"
        },
        {
          "matches": "[vid=\"view_count_shake\"]",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/13761160"
        }
      ]
    },
    {
      "name": "青少年模式",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "quickFind": true,
      "order": -8,
      "key": 1,
      "rules": [
        {
          "matches": "@[text=\"我知道了\"] - * > [text=\"未成年模式\"]",
          "key": 0
        }
      ]
    }
  ]
});
