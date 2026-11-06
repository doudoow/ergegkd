// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "滔滔对讲",
  "id": "com.kylindev.totalk",
  "groups": [
    {
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "priorityTime": 10000,
      "matchRoot": true,
      "fastQuery": true,
      "order": -10,
      "key": 0,
      "rules": [
        {
          "matches": "[vid=\"adgain_splash_skip_ll\"]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/30350919"
        }
      ]
    },
    {
      "name": "其他-开屏误触兜底",
      "desc": "误进广告页后自动退出",
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 1,
      "rules": [
        {
          "matches": "[id=\"android:id/decor_content_parent\"]",
          "action": "back",
          "activityIds": "com.adgain.sdk.base.activity.AdActivity",
          "fastQuery": true,
          "name": "按[返回键]",
          "snapshotUrls": "https://i.gkd.li/i/32742369",
          "key": 0
        }
      ]
    }
  ]
});
