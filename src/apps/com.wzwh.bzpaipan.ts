// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "问真八字排盘",
  "id": "com.wzwh.bzpaipan",
  "groups": [
    {
      "name": "全屏广告",
      "enable": false,
      "fastQuery": true,
      "quickFind": true,
      "key": 0,
      "rules": [
        {
          "matches": "@ImageView[clickable=true] < LinearLayout[childCount=1] <2 FrameLayout[childCount=2] < [id=\"android:id/content\"][childCount=1]",
          "activityIds": "com.qq.e.ads.PortraitADActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/13162912",
          "key": 0
        },
        {
          "matches": "@ImageView[clickable=true] < LinearLayout[childCount=1] <2 FrameLayout[childCount=2] < [id=\"android:id/content\"][childCount=1]",
          "key": 1
        }
      ]
    }
  ]
});
