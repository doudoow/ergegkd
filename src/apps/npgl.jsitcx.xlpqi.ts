// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "NP管理器",
  "id": "npgl.jsitcx.xlpqi",
  "groups": [
    {
      "name": "全屏广告-弹窗广告",
      "key": 0,
      "rules": [
        {
          "matches": "[text$=\"跳过\"]",
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/12799926"
        },
        {
          "matches": "@Image[id=null][text=\"\"] < View + View +n [text=\"反馈\"] +n View > View > TextView[text=\"广告\"]",
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/i/12799942",
            "https://i.gkd.li/i/12800095"
          ]
        }
      ]
    },
    {
      "name": "分段广告-卡片广告",
      "key": 1,
      "rules": [
        {
          "matches": "@Image[childCount=0][visibleToUser=true][width<80 && height<80] < View[childCount=1] +n View[childCount=2] >(2,3) [text=\"广告\"]",
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/12799977",
            "https://i.gkd.li/i/12800107"
          ]
        },
        {
          "matches": "@Image[childCount=0][visibleToUser=true][width<80 && height<80] < View[childCount=1] -3 View >2 [text=\"广告\"]",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/12800034",
          "excludeSnapshotUrls": "https://i.gkd.li/i/12800162"
        },
        {
          "matches": "@LinearLayout > [text=\"不感兴趣\"]",
          "preKeys": [
            0,
            1
          ],
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/12799995"
        }
      ]
    },
    {
      "name": "全屏广告-应用内第三方 SDK 广告弹窗",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "[text$=\"跳过\"]",
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/import/12799926"
        },
        {
          "matches": "@Image[id=null][text=\"\"] < View + View +n [text=\"反馈\"] +n View > View > TextView[text=\"广告\"]",
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/import/12799942",
            "https://i.gkd.li/import/12800095"
          ]
        }
      ]
    },
    {
      "name": "局部广告-应用内第三方 SDK 广告卡片",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": "@Image < View + View >2 Image",
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/import/12799977",
            "https://i.gkd.li/import/12800107"
          ]
        },
        {
          "matches": "Image < View < View +n View > Image[visibleToUser=true]",
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/import/12800034",
            "https://i.gkd.li/import/12800162"
          ]
        },
        {
          "matches": "@LinearLayout > [text=\"不感兴趣\"]",
          "preKeys": [
            0,
            1
          ],
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/import/12799995"
        }
      ]
    },
    {
      "name": "应用内第三方 SDK 广告弹窗",
      "enable": false,
      "key": 4,
      "rules": [
        {
          "matches": "[text$=\"跳过\"]",
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/import/12799926"
        },
        {
          "matches": "@Image[id=null][text=\"\"] < View + View +n [text=\"反馈\"] +n View > View > TextView[text=\"广告\"]",
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/import/12799942",
            "https://i.gkd.li/import/12800095"
          ]
        }
      ]
    },
    {
      "name": "应用内第三方 SDK 广告卡片",
      "enable": false,
      "key": 5,
      "rules": [
        {
          "matches": "@Image < View + View >2 Image",
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/import/12799977",
            "https://i.gkd.li/import/12800107"
          ]
        },
        {
          "matches": "Image < View < View +n View > Image[visibleToUser=true]",
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/import/12800034",
            "https://i.gkd.li/import/12800162"
          ]
        },
        {
          "matches": "@LinearLayout > [text=\"不感兴趣\"]",
          "preKeys": [
            0,
            1
          ],
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/import/12799995"
        }
      ]
    }
  ]
});
