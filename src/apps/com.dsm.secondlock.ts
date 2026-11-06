// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "德施曼智能",
  "id": "com.dsm.secondlock",
  "groups": [
    {
      "name": "全屏广告",
      "key": 0,
      "rules": [
        {
          "matches": "[vid=\"ivCancel\"]",
          "activityIds": [
            ".main.MainActivity",
            "com.dsm.message.activity.MessageActivity"
          ],
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/29934451",
            "https://i.gkd.li/i/29934452"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告",
      "key": 1,
      "rules": [
        {
          "matches": "[vid=\"ivCloseBanner\"]",
          "activityIds": ".main.MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/29934453",
          "key": 0
        }
      ]
    }
  ]
});
