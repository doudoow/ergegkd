// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "OmoFun",
  "id": "com.banshenghuo.mobile.ofdm",
  "groups": [
    {
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "enable": false,
      "key": 0,
      "rules": [
        {
          "matches": "[vid=\"anythink_myoffer_btn_close_id\"]",
          "activityIds": "com.anythink.basead.ui.ATPortraitTranslucentActivity",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/15443189"
        },
        {
          "matches": "@ImageView[childCount=0][text=null][visibleToUser=true] < FrameLayout[childCount=1] <2 FrameLayout[childCount=2] <2 FrameLayout[childCount=2] <2 FrameLayout[childCount=2] - FrameLayout > [text^=\"扭动或点击\"]",
          "activityIds": "com.banshenghuo.mobile.ofdm.MainActivity",
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/15444005"
        },
        {
          "matches": "[text=\"反馈\"] -n @View[index=0] > Image",
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/15444017"
        },
        {
          "matches": "ImageView[childCount=0][text=null] < @ViewGroup[clickable=true] < ViewGroup + ViewGroup > [text=\"广告\"]",
          "activityIds": "com.banshenghuo.mobile.ofdm.MainActivity",
          "fastQuery": true,
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/16548166",
          "exampleUrls": "https://e.gkd.li/8bbf31e8-598b-4021-9136-8de189fc7cf9"
        },
        {
          "matches": "[id=\"android:id/content\"] FrameLayout[index=1][childCount=1] > ImageView",
          "activityIds": "com.banshenghuo.mobile.ofdm.MainActivity",
          "key": 4,
          "snapshotUrls": "https://i.gkd.li/i/15444005"
        },
        {
          "matches": "@ImageView[childCount=0][text=null][visibleToUser=true] < FrameLayout[childCount=1] <2 FrameLayout[childCount=2] <2 FrameLayout[childCount=2] <2 FrameLayout[childCount=2] - FrameLayout > [text^=\"扭动或点击\"]",
          "activityIds": ".MainActivity",
          "fastQuery": true,
          "key": 5,
          "snapshotUrls": "https://i.gkd.li/i/15444005"
        },
        {
          "matches": "ImageView[childCount=0][text=null] < @ViewGroup[clickable=true] < ViewGroup + ViewGroup > [text=\"广告\"]",
          "activityIds": ".MainActivity",
          "fastQuery": true,
          "key": 6,
          "snapshotUrls": "https://i.gkd.li/i/16548166",
          "exampleUrls": "https://e.gkd.li/8bbf31e8-598b-4021-9136-8de189fc7cf9"
        }
      ]
    },
    {
      "name": "通知提示-公告弹窗",
      "desc": "点击[我知道了]",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 1,
      "rules": [
        {
          "matches": "[desc=\"我知道了\"]",
          "activityIds": "com.anythink.basead.ui.ATPortraitTranslucentActivity",
          "snapshotUrls": "https://i.gkd.li/i/16548158",
          "exampleUrls": "https://e.gkd.li/327ea04c-acda-4913-a0a9-fdda9cd83dd7",
          "key": 0
        }
      ]
    }
  ]
});
