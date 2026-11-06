// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "倒计日",
  "id": "com.zhizhou.days",
  "groups": [
    {
      "name": "全屏广告-弹窗广告",
      "key": 0,
      "rules": [
        {
          "matches": "[desc^=\"webview-close\"] > View[clickable=true]",
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "key": 0,
          "name": "穿山甲-第一类广告",
          "snapshotUrls": "https://i.gkd.li/i/12727499"
        },
        {
          "matches": [
            "[text=\"广告\"]",
            "@Image < View + [text=\"反馈\"]"
          ],
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "key": 1,
          "name": "穿山甲-第二类广告",
          "snapshotUrls": "https://i.gkd.li/i/12739678"
        },
        {
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] <n FrameLayout >(2,3) [text^=\"立即\" || text$=\"详情\" || text^=\"了解\" || text=\"去微信看看\" || text$=\"应用\" || text=\"进入小程序\" || text=\"领取优惠\" || text=\"跳转微信\"]",
          "activityIds": "com.zhizhou.days.activity.MainActivity",
          "fastQuery": true,
          "key": 2,
          "name": "优量汇-第一类广告",
          "snapshotUrls": "https://i.gkd.li/i/12727528"
        },
        {
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null] <2 FrameLayout[childCount=5] + FrameLayout[childCount=2] > [text^=\"立即\" || text$=\"详情\" || text^=\"了解\" || text=\"去逛逛\" || text=\"去微信看看\" || text$=\"应用\" || text=\"进入小程序\" || text=\"领取优惠\" || text=\"跳转微信\"]",
          "activityIds": [
            "com.zhizhou.days.activity.MainActivity",
            "com.huawei.android.launcher.unihome.UniHomeLauncher"
          ],
          "fastQuery": true,
          "key": 3,
          "name": "优量汇-第二类广告",
          "snapshotUrls": [
            "https://i.gkd.li/i/12739703",
            "https://i.gkd.li/i/12727546"
          ]
        },
        {
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] <n FrameLayout >(2,3) [text^=\"立即\" || text$=\"详情\" || text^=\"了解\" || text=\"去微信看看\" || text$=\"应用\" || text=\"进入小程序\" || text=\"领取优惠\" || text=\"跳转微信\"]",
          "activityIds": ".activity.MainActivity",
          "fastQuery": true,
          "key": 4,
          "name": "优量汇-第一类广告",
          "snapshotUrls": "https://i.gkd.li/i/12727528"
        },
        {
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null] <2 FrameLayout[childCount=5] + FrameLayout[childCount=2] > [text^=\"立即\" || text$=\"详情\" || text^=\"了解\" || text=\"去逛逛\" || text=\"去微信看看\" || text$=\"应用\" || text=\"进入小程序\" || text=\"领取优惠\" || text=\"跳转微信\"]",
          "activityIds": [
            ".activity.MainActivity",
            "com.huawei.android.launcher.unihome.UniHomeLauncher"
          ],
          "fastQuery": true,
          "key": 5,
          "name": "优量汇-第二类广告",
          "snapshotUrls": [
            "https://i.gkd.li/i/12739703",
            "https://i.gkd.li/i/12727546"
          ]
        }
      ]
    },
    {
      "name": "评价提示-应用评价弹窗",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "@[text=\"以后再说\"] + [text=\"马上评价\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-第三方 SDK 广告弹窗",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "[desc^=\"webview-close\"] > View[clickable=true]",
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "key": 0,
          "name": "穿山甲-第一类广告",
          "snapshotUrls": "https://i.gkd.li/i/12727499"
        },
        {
          "matches": [
            "[text=\"广告\"]",
            "@Image < View + [text=\"反馈\"]"
          ],
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "key": 1,
          "name": "穿山甲-第二类广告",
          "snapshotUrls": "https://i.gkd.li/i/12739678"
        },
        {
          "matches": "ImageView - LinearLayout - FrameLayout > FrameLayout > ImageView[visibleToUser=true]",
          "activityIds": "com.zhizhou.days.activity.MainActivity",
          "key": 2,
          "name": "优量汇-第一类广告",
          "snapshotUrls": "https://i.gkd.li/i/12727528"
        },
        {
          "matches": "ImageView - FrameLayout > FrameLayout > FrameLayout > ImageView[visibleToUser=true]",
          "activityIds": [
            "com.zhizhou.days.activity.MainActivity",
            "com.huawei.android.launcher.unihome.UniHomeLauncher"
          ],
          "key": 3,
          "name": "优量汇-第二类广告",
          "snapshotUrls": [
            "https://i.gkd.li/i/12739703",
            "https://i.gkd.li/i/12727546"
          ]
        }
      ]
    },
    {
      "name": "未分类-应用评价弹窗",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": "@[text=\"以后再说\"] + [text=\"马上评价\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-第三方 SDK 广告弹窗",
      "enable": false,
      "key": 4,
      "rules": [
        {
          "matches": "[desc^=\"webview-close\"] > View[clickable=true]",
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "key": 0,
          "name": "穿山甲-第一类广告",
          "snapshotUrls": "https://i.gkd.li/import/12727499"
        },
        {
          "matches": [
            "[text=\"广告\"]",
            "@Image < View + [text=\"反馈\"]"
          ],
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "key": 1,
          "name": "穿山甲-第二类广告",
          "snapshotUrls": "https://i.gkd.li/import/12739678"
        },
        {
          "matches": "ImageView - LinearLayout - FrameLayout > FrameLayout > ImageView[visibleToUser=true]",
          "activityIds": "com.zhizhou.days.activity.MainActivity",
          "key": 2,
          "name": "优量汇-第一类广告",
          "snapshotUrls": "https://i.gkd.li/import/12727528"
        },
        {
          "matches": "ImageView - FrameLayout > FrameLayout > FrameLayout > ImageView[visibleToUser=true]",
          "activityIds": [
            "com.zhizhou.days.activity.MainActivity",
            "com.huawei.android.launcher.unihome.UniHomeLauncher"
          ],
          "key": 3,
          "name": "优量汇-第二类广告",
          "snapshotUrls": [
            "https://i.gkd.li/import/12739703",
            "https://i.gkd.li/import/12727546"
          ]
        }
      ]
    },
    {
      "name": "全屏广告-应用评价弹窗",
      "enable": false,
      "key": 5,
      "rules": [
        {
          "matches": "@[text=\"以后再说\"] + [text=\"马上评价\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "第三方 SDK 广告弹窗",
      "enable": false,
      "key": 6,
      "rules": [
        {
          "matches": "[desc^=\"webview-close\"] > View[clickable=true]",
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "key": 0,
          "name": "穿山甲-第一类广告",
          "snapshotUrls": "https://i.gkd.li/import/12727499"
        },
        {
          "matches": [
            "[text=\"广告\"]",
            "@Image < View + [text=\"反馈\"]"
          ],
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "key": 1,
          "name": "穿山甲-第二类广告",
          "snapshotUrls": "https://i.gkd.li/import/12739678"
        },
        {
          "matches": "ImageView - LinearLayout - FrameLayout > FrameLayout > ImageView[visibleToUser=true]",
          "activityIds": "com.zhizhou.days.activity.MainActivity",
          "key": 2,
          "name": "优量汇-第一类广告",
          "snapshotUrls": "https://i.gkd.li/import/12727528"
        },
        {
          "matches": "ImageView - FrameLayout > FrameLayout > FrameLayout > ImageView[visibleToUser=true]",
          "activityIds": [
            "com.zhizhou.days.activity.MainActivity",
            "com.huawei.android.launcher.unihome.UniHomeLauncher"
          ],
          "key": 3,
          "name": "优量汇-第二类广告",
          "snapshotUrls": [
            "https://i.gkd.li/import/12739703",
            "https://i.gkd.li/import/12727546"
          ]
        }
      ]
    },
    {
      "name": "应用评价弹窗",
      "enable": false,
      "key": 7,
      "rules": [
        {
          "matches": "@[text=\"以后再说\"] + [text=\"马上评价\"]",
          "key": 0
        }
      ]
    }
  ]
});
