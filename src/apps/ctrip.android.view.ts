// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "携程旅行",
  "id": "ctrip.android.view",
  "groups": [
    {
      "name": "更新提示",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "order": -9,
      "key": 0,
      "rules": [
        {
          "matches": "@ImageView[desc=\"关闭\"][clickable=true][visibleToUser=true] <3 FrameLayout < FrameLayout < [id=\"android:id/content\"]",
          "activityIds": "ctrip.android.publicproduct.home.view.CtripHomeActivity",
          "snapshotUrls": "https://i.gkd.li/i/13218347",
          "key": 0
        },
        {
          "matches": "[text*=\"用户已升级\"] < * + [desc=\"关闭\"]",
          "key": 1
        }
      ]
    },
    {
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "key": 1,
      "rules": [
        {
          "matches": "@ImageView[clickable=true] < RelativeLayout + RelativeLayout >5 [desc^=\"广告\"] + [text=\"立即领取\"]",
          "actionMaximum": 1,
          "activityIds": "ctrip.android.publicproduct.home.view.CtripHomeActivity",
          "matchTime": 10000,
          "fastQuery": true,
          "resetMatch": "app",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/16357287",
          "exampleUrls": "https://e.gkd.li/00628604-fab9-432c-a70b-343c8c889c23"
        },
        {
          "matches": "@ImageView[clickable=true][childCount=0][visibleToUser=true] <4 FrameLayout[childCount=4] < FrameLayout < FrameLayout < [id=\"android:id/content\"]",
          "actionMaximum": 1,
          "activityIds": "ctrip.business.planthome.CtripPlantHomeActivity",
          "matchTime": 10000,
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/19050401",
          "exampleUrls": "https://e.gkd.li/cdc28230-6ea7-4cf7-bef4-a31f7e36eed1"
        },
        {
          "matches": "@ImageView[childCount=0][clickable=true][visibleToUser=true][width<120 && height<120] < RelativeLayout[childCount=1] < RelativeLayout[childCount=2] < [id=\"android:id/content\"]",
          "actionMaximum": 1,
          "activityIds": "ctrip.android.publicproduct.home.business.activity.CtripHomeActivity",
          "matchTime": 10000,
          "fastQuery": true,
          "resetMatch": "app",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/20921664",
          "exampleUrls": "https://e.gkd.li/065da3a4-b746-4ec7-a681-a6fd687c5f70"
        }
      ]
    },
    {
      "name": "更新弹窗",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "[text*=\"用户已升级\"] < * + [desc=\"关闭\"]",
          "key": 0
        }
      ]
    }
  ]
});
