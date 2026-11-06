// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "影视",
  "id": "com.fongmi.android.tv",
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
          "matches": "[id=\"com.fongmi.android.tv:id/buttonPanel\"] >2 [text=\"取消\"]",
          "activityIds": ".ui.activity.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/14035154",
          "key": 0
        },
        {
          "matches": "[vid=\"buttonPanel\"] >2 [text=\"取消\"]",
          "activityIds": ".ui.activity.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/14035154",
          "key": 1
        }
      ]
    }
  ]
});
