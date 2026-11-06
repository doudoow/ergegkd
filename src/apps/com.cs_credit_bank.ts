// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "发现精彩",
  "id": "com.cs_credit_bank",
  "groups": [
    {
      "name": "全屏广告",
      "desc": "点击关闭",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 0,
      "rules": [
        {
          "matches": "@[vid=\"iv_close\"] + [vid=\"iv_advert\"][visibleToUser=true]",
          "activityIds": "com.mapass.example.activity.MainActivity_",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/23141403",
          "exampleUrls": "https://e.gkd.li/0d91563d-057b-47d4-9ce5-8e9a5fc2b9c9",
          "key": 0
        }
      ]
    },
    {
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "priorityTime": 10000,
      "fastQuery": true,
      "order": -10,
      "key": 1,
      "rules": [
        {
          "matches": "@TextView[text*=\"跳过\"] <3 ViewGroup < [vid=\"main_layout\"]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/30388152"
        }
      ]
    }
  ]
});
