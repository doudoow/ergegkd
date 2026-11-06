// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "少年梦阅读",
  "id": "com.shaoniandream",
  "groups": [
    {
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "priorityTime": 10000,
      "order": -10,
      "key": 0,
      "rules": [
        {
          "matches": "[id=\"com.shaoniandream:id/countdown\"]",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/13236791",
          "exampleUrls": "https://e.gkd.li/080e7f84-c8ac-48b3-ba82-c1dbb795f4f6",
          "key": 0
        },
        {
          "matches": "[vid=\"countdown\"]",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/13236791",
          "exampleUrls": "https://e.gkd.li/080e7f84-c8ac-48b3-ba82-c1dbb795f4f6",
          "key": 1
        }
      ]
    }
  ]
});
