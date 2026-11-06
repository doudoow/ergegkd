// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "星影视频",
  "id": "cn.nlyuming.duanju.ting",
  "groups": [
    {
      "name": "其他-[您还未登录]弹窗",
      "desc": "点击关闭",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "@ImageView[childCount=0][visibleToUser=true] < FrameLayout[childCount=1] <2 FrameLayout[childCount=3] < FrameLayout < FrameLayout < FrameLayout < FrameLayout < [id=\"android:id/content\"]",
          "activityIds": "cn.nlyuming.duanju.ting.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/14321891",
          "exampleUrls": "https://m.gkd.li/57941037/3041769f-b644-460b-b0de-9c2a84518849",
          "key": 0
        },
        {
          "matches": "@ImageView[childCount=0][visibleToUser=true] < FrameLayout[childCount=1] <2 FrameLayout[childCount=3] < FrameLayout < FrameLayout < FrameLayout < FrameLayout < [id=\"android:id/content\"]",
          "activityIds": ".MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/14321891",
          "exampleUrls": "https://m.gkd.li/57941037/3041769f-b644-460b-b0de-9c2a84518849",
          "key": 1
        }
      ]
    },
    {
      "name": "通知提示-公告弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 1,
      "rules": [
        {
          "matches": "[desc=\"了解更多\"] - [desc=\"我知道了\"]",
          "key": 0
        }
      ]
    }
  ]
});
