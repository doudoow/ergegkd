// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "嘀嗒出行",
  "id": "com.didapinche.booking",
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
          "matches": "@View[clickable=true] <n * <2 * < [vid=\"flCSJAdContainer\"]",
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/13988957",
            "https://i.gkd.li/i/13989178"
          ],
          "key": 0
        }
      ]
    }
  ]
});
