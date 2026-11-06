// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "电池容量检测管理",
  "id": "com.zlfcapp.batterymanager",
  "groups": [
    {
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "enable": false,
      "key": 0,
      "rules": [
        {
          "matches": "FrameLayout[childCount=4] >2 @RelativeLayout[childCount=3] > RelativeLayout > ProgressBar[childCount=0]",
          "position": {
            "left": "width * 0.9245",
            "top": "width * 0.0401"
          },
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/15220546",
          "exampleUrls": "https://m.gkd.li/57941037/89ad488c-2bcb-4f78-b7ba-ccb5335042cc"
        },
        {
          "matches": "[text=\"反馈\"] -2 @View > Image[text=\"\"][visibleToUser=true][childCount=0]",
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/15220517",
          "exampleUrls": "https://m.gkd.li/57941037/f41a31f3-5ddd-44a5-b450-a6678f551328"
        },
        {
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] <n FrameLayout >(2,3) [text^=\"立即\" || text$=\"详情\" || text^=\"了解\" || text=\"去微信看看\" || text$=\"应用\" || text=\"进入小程序\" || text=\"领取优惠\" || text=\"跳转微信\"]",
          "activityIds": ".mvvm.main.MainActivity",
          "fastQuery": true,
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/19954295"
        },
        {
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null] <2 FrameLayout[childCount=5] + FrameLayout[childCount=2] > [text^=\"立即\" || text$=\"详情\" || text^=\"了解\" || text=\"去逛逛\" || text=\"去微信看看\" || text$=\"应用\" || text=\"进入小程序\" || text=\"领取优惠\" || text=\"跳转微信\"]",
          "activityIds": ".mvvm.main.MainActivity",
          "fastQuery": true,
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/19955131"
        },
        {
          "matches": "@View[text=\"\"][id!=null][childCount=1][getChild(0).getChild(0).childCount=0] + View[childCount=1] > [text=\"反馈\"]",
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "key": 4,
          "snapshotUrls": "https://i.gkd.li/i/19955070",
          "exampleUrls": "https://e.gkd.li/fc18c202-23c9-4b77-bbe6-9674427a53df"
        },
        {
          "matches": "@Image[childCount=0][width<50 && height<50] < View[childCount=1] < View[childCount=1] - View[childCount=1] > [text=\"反馈\"][visibleToUser=true]",
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "key": 5,
          "snapshotUrls": "https://i.gkd.li/i/23362716",
          "exampleUrls": "https://e.gkd.li/a5f1c567-8cca-47e2-be35-0972f32486d0"
        },
        {
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null] - FrameLayout[childCount>2] >3 [text^=\"立即\" || text$=\"应用\" || text=\"了解更多\" || text=\"查看详情\"]",
          "activityIds": "com.zlfcapp.batterymanager.mvvm.main.MainActivity",
          "fastQuery": true,
          "key": 6,
          "snapshotUrls": [
            "https://i.gkd.li/i/23362866",
            "https://i.gkd.li/i/23363372"
          ],
          "exampleUrls": [
            "https://e.gkd.li/b6f0c1c3-b42e-4443-a1dc-299299cf8b5f",
            "https://e.gkd.li/d4b4f127-677a-47d2-81df-b4fa5d7e046d"
          ]
        },
        {
          "matches": "@ImageView[childCount=0] < ViewGroup[childCount=1] < ViewGroup[childCount=1] < ViewGroup[childCount=1] < ViewGroup[childCount=1] + ViewGroup >4 [text=\"反馈\"][visibleToUser=true]",
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "fastQuery": true,
          "key": 7,
          "snapshotUrls": "https://i.gkd.li/i/23363218",
          "exampleUrls": "https://e.gkd.li/279d959b-bc63-45f4-a2c4-22054c4cd3f7"
        },
        {
          "matches": "@ImageView[childCount=0][text=null][visibleToUser=true] < FrameLayout[childCount=1] <3 FrameLayout[childCount=3] < FrameLayout[childCount=2] +5 FrameLayout[childCount=4] > [text^=\"扭动或点击\"]",
          "activityIds": "com.zlfcapp.batterymanager.mvvm.main.MainActivity",
          "fastQuery": true,
          "key": 8,
          "snapshotUrls": "https://i.gkd.li/i/23363256",
          "exampleUrls": "https://e.gkd.li/2de28d35-4f2d-46c5-ab3e-d108013a10d0"
        },
        {
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null] - FrameLayout[childCount>2] >3 [text^=\"立即\" || text$=\"应用\" || text=\"了解更多\" || text=\"查看详情\"]",
          "activityIds": ".mvvm.main.MainActivity",
          "fastQuery": true,
          "key": 9,
          "snapshotUrls": [
            "https://i.gkd.li/i/23362866",
            "https://i.gkd.li/i/23363372"
          ],
          "exampleUrls": [
            "https://e.gkd.li/b6f0c1c3-b42e-4443-a1dc-299299cf8b5f",
            "https://e.gkd.li/d4b4f127-677a-47d2-81df-b4fa5d7e046d"
          ]
        },
        {
          "matches": "@ImageView[childCount=0][text=null][visibleToUser=true] < FrameLayout[childCount=1] <3 FrameLayout[childCount=3] < FrameLayout[childCount=2] +5 FrameLayout[childCount=4] > [text^=\"扭动或点击\"]",
          "activityIds": ".mvvm.main.MainActivity",
          "fastQuery": true,
          "key": 10,
          "snapshotUrls": "https://i.gkd.li/i/23363256",
          "exampleUrls": "https://e.gkd.li/2de28d35-4f2d-46c5-ab3e-d108013a10d0"
        }
      ]
    },
    {
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "actionMaximumKey": 0,
      "resetMatch": "app",
      "fastQuery": true,
      "order": -10,
      "key": 1,
      "rules": [
        {
          "matches": "[text*=\"跳过\"][text.length<10][visibleToUser=true]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/15140838"
        },
        {
          "matches": "FrameLayout > FrameLayout[childCount>2] > @View[clickable=true] + TextView <<n [id=\"android:id/content\"]",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/13960341"
        },
        {
          "matches": "@View[clickable=true] <<n [vid=\"splash_container\"]",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/import/13960341",
          "key": 2
        }
      ]
    }
  ]
});
