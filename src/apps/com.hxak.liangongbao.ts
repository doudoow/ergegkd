// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "链工宝",
  "id": "com.hxak.liangongbao",
  "groups": [
    {
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "order": -10,
      "key": 0,
      "rules": [
        {
          "matches": "[id=`com.hxak.liangongbao:id/time_down`]",
          "key": 0
        }
      ]
    }
  ]
});
