// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "巴哈姆特",
  "id": "tw.com.gamer.android.activecenter",
  "groups": [
    {
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "priorityTime": 10000,
      "fastQuery": true,
      "order": -10,
      "key": 0,
      "rules": [
        {
          "matches": "@ImageButton[desc=\"Interstitial close button\"][visibleToUser=true] < FrameLayout <2 RelativeLayout < [id=\"android:id/content\"]",
          "snapshotUrls": "https://i.gkd.li/i/14292691",
          "key": 0
        },
        {
          "matches": "[desc=\"Interstitial close button\"][clickable=true]",
          "key": 1
        }
      ]
    }
  ]
});
