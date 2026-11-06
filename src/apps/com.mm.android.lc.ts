// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "乐橙",
  "id": "com.mm.android.lc",
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
          "matches": "[vid=\"advert_countdown_view\"]",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/14586621",
          "exampleUrls": "https://m.gkd.li/57941037/b30750e1-92ca-452b-8467-a0074989ec92",
          "key": 0
        },
        {
          "matches": "[vid=\"advert_countdown_view\"]",
          "key": 1
        }
      ]
    }
  ]
});
