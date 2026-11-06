// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "安吉星",
  "id": "com.shanghaionstar",
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
          "matches": "[id=\"com.shanghaionstar:id/jump_view\"]",
          "snapshotUrls": "https://i.gkd.li/i/13071523",
          "key": 0
        },
        {
          "matches": "[vid=\"jump_view\"]",
          "snapshotUrls": "https://i.gkd.li/i/13071523",
          "key": 1
        }
      ]
    }
  ]
});
