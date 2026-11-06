// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "微众银行",
  "id": "com.webank.wemoney",
  "groups": [
    {
      "name": "全屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 0,
      "rules": [
        {
          "matches": "@[desc=\"关闭\"][clickable=true] +2 Button > [text^=\"立即\"][visibleToUser=true]",
          "activityIds": ".MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/23280589",
          "exampleUrls": "https://e.gkd.li/320f2c46-fd24-45b6-8031-8a4bae46558b",
          "key": 0
        }
      ]
    }
  ]
});
