// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "灯塔加速器",
  "id": "com.v2ray.bizer",
  "groups": [
    {
      "name": "通知提示-公告弹窗",
      "desc": "点击关闭",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 0,
      "rules": [
        {
          "matches": "@[vid=\"close\"] - [text*=\"公告\"][visibleToUser=true]",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/23834355",
          "exampleUrls": "https://e.gkd.li/6dde3a1f-0428-4110-918e-f4b5853d5c04",
          "key": 0
        }
      ]
    }
  ]
});
