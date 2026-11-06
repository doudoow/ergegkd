// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "会计云课堂",
  "id": "com.dongao.kaoqian.phone",
  "groups": [
    {
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "priorityTime": 10000,
      "fastQuery": true,
      "order": -10,
      "key": 0,
      "rules": [
        {
          "matches": "[vid=\"tv_welcome_guide\"]",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/14809185",
          "key": 0
        },
        {
          "matches": "[vid=\"tv_welcome_guide\"]",
          "key": 1
        }
      ]
    }
  ]
});
