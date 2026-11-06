// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "肯德基",
  "id": "com.yek.android.kfc.activitys",
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
          "matches": "[id=`com.yek.android.kfc.activitys:id/splash_tv_3`]",
          "key": 0
        }
      ]
    }
  ]
});
