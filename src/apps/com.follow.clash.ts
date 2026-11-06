// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "FlClash",
  "id": "com.follow.clash",
  "groups": [
    {
      "name": "功能类-节点自动测延迟",
      "desc": "进app后仅测1次",
      "matchTime": 5000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 0,
      "rules": [
        {
          "matches": "@Button[clickable=true] -4 * > [desc=\"代理\"]",
          "activityIds": ".MainActivity",
          "snapshotUrls": [
            "https://i.gkd.li/i/26210674",
            "https://i.gkd.li/i/29658034"
          ],
          "key": 0
        }
      ]
    }
  ]
});
