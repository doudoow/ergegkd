// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "Go-Goal",
  "id": "com.zyyx.gogoalorg",
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
          "matches": "RelativeLayout[childCount=3] > [vid=\"iv_bottom_view\"] - [text$=\"跳转\"][clickable=true][visibleToUser=true]",
          "activityIds": ".ui.activity.AdvertrisementActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/26194519",
          "key": 0
        }
      ]
    }
  ]
});
