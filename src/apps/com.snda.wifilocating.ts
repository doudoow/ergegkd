// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "WiFi万能钥匙",
  "id": "com.snda.wifilocating",
  "groups": [
    {
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "enable": false,
      "key": 0,
      "rules": [
        {
          "matches": "[vid=\"interstitial_close_iv\"]",
          "activityIds": "com.lantern.start.main.activity.HomeMainActivity",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/14032794"
        },
        {
          "matches": "[text=\"反馈\"] + View[visibleToUser=true]",
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/14256643"
        },
        {
          "matches": "@[vid=\"wf_interstitial_close_iv\"] < * >5 [vid=\"wf_interstitial_action_tv\"]",
          "activityIds": "com.zm.wfsdk.core.activity.WfInterstitialActivity",
          "fastQuery": true,
          "key": 2,
          "snapshotUrls": [
            "https://i.gkd.li/i/14927523",
            "https://i.gkd.li/i/15320417"
          ]
        },
        {
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] <n FrameLayout >(2,3) [text^=\"立即\" || text$=\"详情\" || text^=\"了解\" || text=\"去微信看看\" || text$=\"应用\" || text=\"进入小程序\" || text=\"领取优惠\" || text=\"跳转微信\"]",
          "activityIds": "com.wifitutu.ui.main.MainActivity",
          "fastQuery": true,
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/14964913"
        },
        {
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] +n FrameLayout >(1,2) [text^=\"立即\" || text=\"查看详情\" || text=\"了解更多\" || text=\"去微信看看\" || text$=\"应用\" || text=\"进入小程序\" || text=\"领取优惠\" || text=\"跳转微信\"]",
          "activityIds": "com.wifitutu.ui.main.MainActivity",
          "fastQuery": true,
          "key": 4,
          "snapshotUrls": "https://i.gkd.li/i/14964913"
        }
      ]
    },
    {
      "name": "全屏广告-连接WiFi后弹出的广告",
      "desc": "点击关闭",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": "[vid=\"native_express_close_proxy\"]",
          "activityIds": "com.wifitutu.ui.tools.SpeedUpBActivity",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/14622506"
        }
      ]
    },
    {
      "name": "功能类-加速成功后自动点击返回",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "[vid=\"success_desc\"] + [vid=\"back_layout\"]",
          "activityIds": "com.wifitutu.ui.tools.SpeedUpActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/14811531",
          "exampleUrls": "https://m.gkd.li/57941037/90a4d16d-b39b-4068-882b-d22acca2b632",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-连接WiFi界面右侧悬浮广告",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": "[vid=\"img_close\"]",
          "activityIds": "com.wifitutu.ui.main.MainActivity",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/15284722"
        }
      ]
    },
    {
      "name": "局部广告-“我的”界面广告卡片",
      "enable": false,
      "key": 4,
      "rules": [
        {
          "matches": "[vid=\"native_express_ad_close\"]",
          "activityIds": "com.wifitutu.ui.main.MainActivity",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/15284730"
        },
        {
          "matches": "@* - [vid=\"native_express_ad_logo_tv\"]",
          "activityIds": "com.wifitutu.ui.main.MainActivity",
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/15284730"
        }
      ]
    },
    {
      "name": "全屏广告-广告弹窗",
      "desc": "点击关闭",
      "enable": false,
      "key": 5,
      "rules": [
        {
          "matches": "[vid=\"interstitial_close_iv\"]",
          "activityIds": "com.lantern.start.main.activity.HomeMainActivity",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/14032794"
        },
        {
          "matches": "[text=\"反馈\"] + View[visibleToUser=true]",
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/14256643"
        },
        {
          "matches": "[vid=\"wf_interstitial_close_iv\"]",
          "activityIds": "com.zm.wfsdk.core.activity.WfInterstitialActivity",
          "fastQuery": true,
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/14927523"
        },
        {
          "matches": "[id=\"android:id/content\"] >(3,4) FrameLayout[childCount>1] > FrameLayout[childCount=1] > ImageView",
          "activityIds": "com.wifitutu.ui.main.MainActivity",
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/14964913"
        }
      ]
    },
    {
      "name": "全屏广告-连接 WiFi 后弹出的广告",
      "desc": "点击关闭",
      "enable": false,
      "fastQuery": true,
      "key": 6,
      "rules": [
        {
          "matches": "[vid=\"native_express_close_proxy\"]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/14622506"
        }
      ]
    },
    {
      "name": "功能类-加速成功自动返回",
      "enable": false,
      "fastQuery": true,
      "key": 7,
      "rules": [
        {
          "matches": "[vid=\"success_desc\"] + [vid=\"back_layout\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-[我的]界面广告卡片",
      "key": 8,
      "rules": [
        {
          "matches": "[vid=\"native_express_ad_close\"]",
          "activityIds": "com.wifitutu.ui.main.MainActivity",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/15284730"
        }
      ]
    },
    {
      "name": "全屏广告-内部广告",
      "enable": false,
      "key": 9,
      "rules": [
        {
          "matches": [
            "[id=`com.snda.wifilocating:id/outer_ad_dislike_item_title`][text=`为什么看到此广告`]",
            "@[id=`com.snda.wifilocating:id/outer_ad_dislike_item_one`] [id=`com.snda.wifilocating:id/outer_ad_dislike_item_title`][text=`不感兴趣`]"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "内部广告",
      "enable": false,
      "key": 10,
      "rules": [
        {
          "matches": [
            "[id=`com.snda.wifilocating:id/outer_ad_dislike_item_title`][text=`为什么看到此广告`]",
            "@[id=`com.snda.wifilocating:id/outer_ad_dislike_item_one`] [id=`com.snda.wifilocating:id/outer_ad_dislike_item_title`][text=`不感兴趣`]"
          ],
          "key": 0
        }
      ]
    }
  ]
});
