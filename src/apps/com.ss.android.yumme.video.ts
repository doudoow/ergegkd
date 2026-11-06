// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "抖音精选",
  "id": "com.ss.android.yumme.video",
  "groups": [
    {
      "name": "更新提示",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": [
            "[text=\"立即升级\"]",
            "[text=\"以后再说\"]"
          ],
          "activityIds": ".main.MainActivity",
          "snapshotUrls": [
            "https://i.gkd.li/i/12534016",
            "https://i.gkd.li/i/13328599"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "评价提示",
      "matchTime": 10000,
      "actionMaximum": 1,
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "TextView[text=\"去商店评分\"]",
          "action": "back",
          "activityIds": "com.ss.android.ugc.aweme.main.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/15858132",
          "key": 0
        }
      ]
    }
  ]
});
