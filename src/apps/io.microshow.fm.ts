// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "畅听FM",
  "id": "io.microshow.fm",
  "groups": [
    {
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 0,
      "rules": [
        {
          "matches": "@Button[childCount=0][clickable=true][visibleToUser=true] <2 FrameLayout < RelativeLayout < [id=\"android:id/content\"]",
          "activityIds": "io.microshow.fm.ui.activity.MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/14953007",
          "key": 0
        },
        {
          "matches": "[id=\"android:id/content\"] > RelativeLayout > FrameLayout[childCount=2] > Button[clickable=true][visibleToUser=true]",
          "activityIds": "io.microshow.fm.ui.activity.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/14953007",
          "key": 1
        },
        {
          "matches": "@Button[childCount=0][clickable=true][visibleToUser=true] <2 FrameLayout < RelativeLayout < [id=\"android:id/content\"]",
          "activityIds": ".ui.activity.MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/14953007",
          "key": 2
        }
      ]
    }
  ]
});
