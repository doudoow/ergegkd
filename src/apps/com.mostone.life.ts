// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "默往",
  "id": "com.mostone.life",
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
          "matches": "[id=\"android:id/content\"] >n FrameLayout[childCount=4] > View",
          "key": 0
        }
      ]
    }
  ]
});
