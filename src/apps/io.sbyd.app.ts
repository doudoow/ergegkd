// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "轻松阅",
  "id": "io.sbyd.app",
  "groups": [
    {
      "name": "全屏广告-弹窗广告",
      "enable": false,
      "key": 0,
      "rules": [
        {
          "matches": "@ImageView[childCount=0][text=null][visibleToUser=true] < FrameLayout[childCount=1] <2 FrameLayout[childCount=2] <2 FrameLayout[childCount=2] <2 FrameLayout[childCount=2] - FrameLayout > [text^=\"扭动或点击\"]",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/13274336"
        },
        {
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] <n FrameLayout >(2,3) [text^=\"立即\" || text$=\"详情\" || text^=\"了解\" || text=\"去微信看看\" || text$=\"应用\" || text=\"进入小程序\" || text=\"领取优惠\" || text=\"跳转微信\"]",
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/i/13302326",
            "https://i.gkd.li/i/13313576",
            "https://i.gkd.li/i/13313624",
            "https://i.gkd.li/i/13313576"
          ]
        },
        {
          "matches": "@Image[childCount=0][text=\"\"] < View[childCount=1] + View[childCount=1][text=\"\"] +n View >(1,2) View[childCount=1] > [text$=\"广告\"]",
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "key": 2,
          "snapshotUrls": [
            "https://i.gkd.li/i/12925095",
            "https://i.gkd.li/i/12925052"
          ]
        },
        {
          "matches": "TextView < LinearLayout[childCount=2] < FrameLayout[childCount=2] > FrameLayout[childCount=1] > ImageView",
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/import/13274336"
        },
        {
          "matches": [
            "[text^=\"立即\" || text^=\"查看\" || text^=\"领取\"][text.length=4]",
            "[id=\"android:id/content\"] >2 FrameLayout[childCount=3||childCount=2] > FrameLayout[childCount=5||childCount=6||childCount=8] > FrameLayout[childCount=1] > ImageView[text=null][visibleToUser=true]"
          ],
          "key": 4,
          "snapshotUrls": [
            "https://i.gkd.li/import/13302326",
            "https://i.gkd.li/import/13313576",
            "https://i.gkd.li/import/13313624",
            "https://i.gkd.li/import/13313576"
          ]
        },
        {
          "matches": "[text=\"反馈\"] -2 @View - Image",
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "key": 5,
          "snapshotUrls": "https://i.gkd.li/import/12925052"
        },
        {
          "matches": "[text=\"反馈\"] -4 @View < View[childCount=7]",
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "key": 6,
          "snapshotUrls": "https://i.gkd.li/import/12925095"
        }
      ]
    },
    {
      "name": "未分类-弹窗广告",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": "TextView < LinearLayout[childCount=2] < FrameLayout[childCount=2] > FrameLayout[childCount=1] > ImageView",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/13274336"
        },
        {
          "matches": [
            "[text^=\"立即\" || text^=\"查看\" || text^=\"领取\"][text.length=4]",
            "[id=\"android:id/content\"] >2 FrameLayout[childCount=3||childCount=2] > FrameLayout[childCount=5||childCount=6||childCount=8] > FrameLayout[childCount=1] > ImageView[text=null][visibleToUser=true]"
          ],
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/i/13302326",
            "https://i.gkd.li/i/13313576",
            "https://i.gkd.li/i/13313624",
            "https://i.gkd.li/i/13313576"
          ]
        },
        {
          "matches": "[text=\"反馈\"] -2 @View - Image",
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/12925052"
        },
        {
          "matches": "[text=\"反馈\"] -4 @View < View[childCount=7]",
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/12925095"
        }
      ]
    },
    {
      "name": "弹窗广告",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "TextView < LinearLayout[childCount=2] < FrameLayout[childCount=2] > FrameLayout[childCount=1] > ImageView",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/import/13274336"
        },
        {
          "matches": [
            "[text^=\"立即\" || text^=\"查看\" || text^=\"领取\"][text.length=4]",
            "[id=\"android:id/content\"] >2 FrameLayout[childCount=3||childCount=2] > FrameLayout[childCount=5||childCount=6||childCount=8] > FrameLayout[childCount=1] > ImageView[text=null][visibleToUser=true]"
          ],
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/import/13302326",
            "https://i.gkd.li/import/13313576",
            "https://i.gkd.li/import/13313624",
            "https://i.gkd.li/import/13313576"
          ]
        },
        {
          "matches": "[text=\"反馈\"] -2 @View - Image",
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/import/12925052"
        },
        {
          "matches": "[text=\"反馈\"] -4 @View < View[childCount=7]",
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/import/12925095"
        }
      ]
    }
  ]
});
