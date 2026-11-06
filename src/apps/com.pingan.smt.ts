// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "i深圳",
  "id": "com.pingan.smt",
  "groups": [
    {
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "key": 0,
      "rules": [
        {
          "matches": "[vid=\"close_view\"]",
          "actionMaximum": 1,
          "activityIds": "com.pingan.smt.MainActivity",
          "matchTime": 10000,
          "fastQuery": true,
          "resetMatch": "app",
          "snapshotUrls": "https://i.gkd.li/i/17011387",
          "exampleUrls": "https://e.gkd.li/97a058cf-0564-4194-b527-b2ec40233204",
          "key": 0
        },
        {
          "matches": "[vid=\"close_view\"]",
          "actionMaximum": 1,
          "activityIds": ".MainActivity",
          "matchTime": 10000,
          "fastQuery": true,
          "resetMatch": "app",
          "snapshotUrls": "https://i.gkd.li/i/17011387",
          "exampleUrls": "https://e.gkd.li/97a058cf-0564-4194-b527-b2ec40233204",
          "key": 1
        }
      ]
    }
  ]
});
