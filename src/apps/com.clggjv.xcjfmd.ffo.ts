// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "Lanerc",
  "id": "com.clggjv.xcjfmd.ffo",
  "groups": [
    {
      "name": "通知提示-公告弹窗",
      "desc": "点击[已知晓]",
      "matchTime": 14000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "forcedTime": 14000,
      "key": 0,
      "rules": [
        {
          "matches": "@Button[desc=\"已知晓\"][clickable=true] <2 View[childCount=2][desc!=null][visibleToUser=true] <<6 FrameLayout < [id=\"android:id/content\"]",
          "activityIds": ".MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/29703051",
          "exampleUrls": "https://e.gkd.li/96567525-3f64-4e6e-af40-6e41a81fac96",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-弹窗广告",
      "desc": "倒计时结束后点击[暂时跳过]",
      "key": 1,
      "rules": [
        {
          "matches": "@View[desc*=\"\\n暂时跳过\\n\"][childCount=4][desc!=null][desc.length>20] <<6 FrameLayout < [id=\"android:id/content\"]",
          "activityIds": ".MainActivity",
          "matchRoot": true,
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/29703246",
          "excludeSnapshotUrls": "https://i.gkd.li/i/29703192",
          "exampleUrls": "https://e.gkd.li/93c04052-3d24-4684-83ec-ccaf13557f22",
          "key": 0
        }
      ]
    }
  ]
});
