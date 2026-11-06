// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "两步路户外助手",
  "id": "com.lolaage.tbulu.tools",
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
          "matches": "[id=\"com.lolaage.tbulu.tools:id/tvFullUpgrade\"] + [id=\"com.lolaage.tbulu.tools:id/tvCancel\"]",
          "activityIds": ".upgrade",
          "snapshotUrls": "https://i.gkd.li/i/12882550",
          "key": 0
        },
        {
          "matches": "[id=\"com.lolaage.tbulu.tools:id/tvFullUpgrade\"] + [id=\"com.lolaage.tbulu.tools:id/tvCancel\"]",
          "key": 1
        },
        {
          "matches": "[vid=\"tvFullUpgrade\"] + [vid=\"tvCancel\"]",
          "activityIds": ".upgrade",
          "snapshotUrls": "https://i.gkd.li/i/12882550",
          "key": 2
        }
      ]
    },
    {
      "name": "全屏广告-弹窗广告",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null] <2 FrameLayout[childCount=5] + FrameLayout[childCount=2] > [text^=\"立即\" || text$=\"详情\" || text^=\"了解\" || text=\"去逛逛\" || text=\"去微信看看\" || text$=\"应用\" || text=\"进入小程序\" || text=\"领取优惠\" || text=\"跳转微信\"]",
          "activityIds": [
            "com.lolaage.tbulu.tools.ui.activity.WelcomeActivity",
            "com.lolaage.tbulu.tools.ui.activity.main.MainActivity"
          ],
          "forcedTime": 10000,
          "fastQuery": true,
          "key": 0,
          "name": "腾讯广告",
          "snapshotUrls": [
            "https://i.gkd.li/i/13627861",
            "https://i.gkd.li/i/13650732",
            "https://i.gkd.li/i/14866147"
          ]
        },
        {
          "matches": "[vid=\"ivClose\"]",
          "activityIds": "com.lolaage.tbulu.tools.ui.activity.main.MainActivity",
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/14952807"
        },
        {
          "matches": "[text=\"反馈\"] -4 View[childCount=1] > Image[childCount=0][visibleToUser=true]",
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "forcedTime": 10000,
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/16812345",
          "exampleUrls": "https://e.gkd.li/0ed488e1-f0d8-4c5f-a507-af9c2cedd2a1"
        },
        {
          "matches": "[id=\"android:id/content\"] >(3,4) FrameLayout[childCount>4] > FrameLayout[childCount=1] > ImageView",
          "activityIds": [
            "com.lolaage.tbulu.tools.ui.activity.WelcomeActivity",
            "com.lolaage.tbulu.tools.ui.activity.main.MainActivity"
          ],
          "forcedTime": 10000,
          "key": 3,
          "name": "腾讯广告",
          "snapshotUrls": [
            "https://i.gkd.li/i/13627861",
            "https://i.gkd.li/i/13650732",
            "https://i.gkd.li/i/14866147"
          ]
        },
        {
          "matches": "FrameLayout > FrameLayout[childCount=1] > ImageView[width<80][height<80]",
          "activityIds": "com.lolaage.tbulu.tools.ui.activity.WelcomeActivity",
          "key": 4,
          "name": "腾讯广告",
          "snapshotUrls": [
            "https://i.gkd.li/import/13627861",
            "https://i.gkd.li/import/13650732"
          ]
        }
      ]
    },
    {
      "name": "权限提示-通知权限",
      "desc": "点击[取消]",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": "[text=\"发送通知\"] + * >3 [text=\"取消\"]",
          "activityIds": ".ui.activity.main.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/14952803",
          "key": 0
        },
        {
          "matches": "[text=\"发送通知\"] + * >3 [text=\"取消\"]",
          "snapshotUrls": "https://i.gkd.li/i/14952803",
          "key": 1
        }
      ]
    },
    {
      "name": "全屏广告",
      "key": 3,
      "rules": [
        {
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null] <2 FrameLayout[childCount=5] + FrameLayout[childCount=2] > [text^=\"立即\" || text$=\"详情\" || text^=\"了解\" || text=\"去逛逛\" || text=\"去微信看看\" || text$=\"应用\" || text=\"进入小程序\" || text=\"领取优惠\" || text=\"跳转微信\"]",
          "activityIds": [
            ".ui.activity.WelcomeActivity",
            ".ui.activity.main.MainActivity"
          ],
          "forcedTime": 10000,
          "fastQuery": true,
          "key": 0,
          "name": "腾讯广告",
          "snapshotUrls": [
            "https://i.gkd.li/i/13627861",
            "https://i.gkd.li/i/13650732",
            "https://i.gkd.li/i/14866147"
          ]
        },
        {
          "matches": "[vid=\"ivClose\"]",
          "activityIds": ".ui.activity.main.MainActivity",
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/14952807"
        },
        {
          "anyMatches": [
            "ImageView[width<64 && height<64] < @[clickable=true][childCount=1] <n [childCount=3] - * > [text=\"反馈\"][visibleToUser=true]",
            "[text=\"反馈\"] -4 View[childCount=1] > Image[width<73 && height<73][visibleToUser=true]"
          ],
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "forcedTime": 10000,
          "fastQuery": true,
          "key": 2,
          "name": "字节广告",
          "snapshotUrls": [
            "https://i.gkd.li/i/27421010",
            "https://i.gkd.li/i/16812345"
          ],
          "exampleUrls": [
            "https://e.gkd.li/86ac6e25-9125-44a0-9ec5-c504affcd456",
            "https://e.gkd.li/0ed488e1-f0d8-4c5f-a507-af9c2cedd2a1"
          ]
        },
        {
          "matches": "@Image[width<75 || height<75] <<2 View[index=parent.childCount.minus(1)] <n * < View <2 [childCount=2] <n View <<2 [id^=\"ad-container\"] <<3 [text=\"穿山甲\"] <<3 FrameLayout <4 * <<3 FrameLayout <3 * <<2 [id=\"android:id/content\"]",
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "fastQuery": true,
          "key": 3,
          "name": "穿山甲广告",
          "snapshotUrls": "https://i.gkd.li/i/27740750",
          "exampleUrls": "https://e.gkd.li/6b42516f-756c-44d9-bac5-ce511e69c3e0"
        }
      ]
    },
    {
      "name": "更新弹窗",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 4,
      "rules": [
        {
          "matches": "[id=\"com.lolaage.tbulu.tools:id/tvFullUpgrade\"] + [id=\"com.lolaage.tbulu.tools:id/tvCancel\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "弹窗广告",
      "enable": false,
      "key": 5,
      "rules": [
        {
          "matches": "FrameLayout > FrameLayout[childCount=1] > ImageView[width<80][height<80]",
          "activityIds": "com.lolaage.tbulu.tools.ui.activity.WelcomeActivity",
          "key": 0,
          "name": "腾讯广告",
          "snapshotUrls": [
            "https://i.gkd.li/import/13627861",
            "https://i.gkd.li/import/13650732"
          ]
        }
      ]
    }
  ]
});
