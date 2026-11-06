// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "小米耳机",
  "id": "com.mi.earphone",
  "groups": [
    {
      "name": "评价提示",
      "key": 0,
      "rules": [
        {
          "matches": "@[vid=\"close_iv\"] + [text=\"喜欢“小米耳机”吗？\"]",
          "activityIds": ".main.MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/23263036",
          "key": 0
        }
      ]
    }
  ]
});
