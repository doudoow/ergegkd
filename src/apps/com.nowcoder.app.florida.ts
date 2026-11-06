// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "牛客",
  "id": "com.nowcoder.app.florida",
  "groups": [
    {
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "actionMaximumKey": 0,
      "resetMatch": "app",
      "fastQuery": true,
      "order": -10,
      "key": 0,
      "rules": [
        {
          "matches": "FrameLayout > FrameLayout[childCount>2] > @View[clickable=true] + TextView <<n [id=\"android:id/content\"]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/13855443"
        },
        {
          "matches": "[text*=\"跳过\"][text.length<10][visibleToUser=true]",
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/i/14819443",
            "https://i.gkd.li/i/14845692"
          ]
        },
        {
          "matches": "@View <2 FrameLayout[childCount=3] <2 FrameLayout[childCount=2] < FrameLayout[childCount=1] < [vid=\"fl_splash_container\"]",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/import/13855443"
        }
      ]
    }
  ]
});
