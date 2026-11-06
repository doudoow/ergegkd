// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "看剧",
  "id": "com.bx.game.dgg",
  "groups": [
    {
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "key": 0,
      "rules": [
        {
          "matches": "[text=\"反馈\"] -2 @View > Image[childCount=0][text=\"\"]",
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/15335006"
        },
        {
          "matches": "[vid=\"anythink_myoffer_btn_close_id\"]",
          "activityIds": "com.anythink.basead.ui.ATPortraitTranslucentActivity",
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/15362931"
        },
        {
          "matches": "ImageView[childCount=0][text=null] < @ViewGroup[childCount=1][clickable=true][visibleToUser=true] < ViewGroup +n ViewGroup[childCount=2] > [text=\"广告\"]",
          "activityIds": "com.bx.game.dgg.MainActivity",
          "fastQuery": true,
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/15362927"
        },
        {
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] <n FrameLayout >(2,3) [text^=\"立即\" || text$=\"详情\" || text^=\"了解\" || text=\"去微信看看\" || text$=\"应用\" || text=\"进入小程序\" || text=\"领取优惠\" || text=\"跳转微信\"]",
          "activityIds": "com.bx.game.dgg.MainActivity",
          "fastQuery": true,
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/15400143"
        },
        {
          "matches": "ImageView[childCount=0][text=null] < @ViewGroup[childCount=1][clickable=true][visibleToUser=true] < ViewGroup +n ViewGroup[childCount=2] > [text=\"广告\"]",
          "activityIds": ".MainActivity",
          "fastQuery": true,
          "key": 4,
          "snapshotUrls": "https://i.gkd.li/i/15362927"
        },
        {
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] <n FrameLayout >(2,3) [text^=\"立即\" || text$=\"详情\" || text^=\"了解\" || text=\"去微信看看\" || text$=\"应用\" || text=\"进入小程序\" || text=\"领取优惠\" || text=\"跳转微信\"]",
          "activityIds": ".MainActivity",
          "fastQuery": true,
          "key": 5,
          "snapshotUrls": "https://i.gkd.li/i/15400143"
        }
      ]
    },
    {
      "name": "通知提示-[温馨提示]弹窗",
      "desc": "点击[我知道了]",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "@Button[desc=\"我知道了\"][visibleToUser=true] < View <2 View < View < View < View < View < FrameLayout < [id=\"android:id/content\"]",
          "activityIds": "com.bx.game.dgg.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/15362930",
          "exampleUrls": "https://m.gkd.li/57941037/8a825661-5595-4577-835c-2a0b2d41bc14",
          "key": 0
        },
        {
          "matches": "@Button[desc=\"我知道了\"][visibleToUser=true] < View <2 View < View < View < View < View < FrameLayout < [id=\"android:id/content\"]",
          "activityIds": ".MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/15362930",
          "exampleUrls": "https://m.gkd.li/57941037/8a825661-5595-4577-835c-2a0b2d41bc14",
          "key": 1
        }
      ]
    }
  ]
});
