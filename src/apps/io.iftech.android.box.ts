// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "小组件盒子",
  "id": "io.iftech.android.box",
  "groups": [
    {
      "name": "全屏广告-弹窗广告",
      "enable": false,
      "key": 0,
      "rules": [
        {
          "matches": "@Image[text=\"\"] < View +(n) View >(2) TextView[text=\"广告\"]",
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/12706209"
        },
        {
          "matches": "ImageView - FrameLayout > ImageView[id=null]",
          "activityIds": "io.iftech.android.box.main.HomeActivity",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/12706209"
        },
        {
          "matches": "[id=\"io.iftech.android.box:id/anythink_myoffer_btn_close_id\"]",
          "activityIds": "com.anythink.basead.ui.ATPortraitTranslucentActivity",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/12706228"
        },
        {
          "matches": "@ImageView[id=null][clickable=true] + RelativeLayout + ImageView + ImageView",
          "activityIds": "com.baidu.mobads.sdk.api.MobRewardVideoActivity",
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/12706236"
        },
        {
          "matches": "@ImageView[id=null][clickable=true] + RelativeLayout > RelativeLayout > ImageView + ImageView",
          "activityIds": "com.baidu.mobads.sdk.api.MobRewardVideoActivity",
          "key": 4,
          "snapshotUrls": "https://i.gkd.li/i/12706240"
        },
        {
          "matches": "ImageView - FrameLayout > ImageView[id=null]",
          "activityIds": ".main.HomeActivity",
          "key": 5,
          "snapshotUrls": "https://i.gkd.li/i/12706209"
        },
        {
          "matches": "[vid=\"anythink_myoffer_btn_close_id\"]",
          "activityIds": "com.anythink.basead.ui.ATPortraitTranslucentActivity",
          "key": 6,
          "snapshotUrls": "https://i.gkd.li/i/12706228"
        }
      ]
    },
    {
      "name": "全屏广告-会员限时优惠弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 1,
      "rules": [
        {
          "matches": "@[id=\"io.iftech.android.box:id/ivClose\"] + [text^=\"限时\"][text$=\"特惠\"]",
          "activityIds": "io.iftech.android.box.main.HomeActivity",
          "snapshotUrls": "https://i.gkd.li/i/12706226",
          "key": 0
        },
        {
          "matches": "@[vid=\"ivClose\"] + [text^=\"限时\"][text$=\"特惠\"]",
          "activityIds": ".main.HomeActivity",
          "snapshotUrls": "https://i.gkd.li/i/12706226",
          "key": 1
        },
        {
          "matches": "@[id=\"io.iftech.android.box:id/ivClose\"] + [text^=\"限时\"][text$=\"特惠\"]",
          "key": 2
        }
      ]
    },
    {
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "order": -10,
      "key": 2,
      "rules": [
        {
          "matches": "FrameLayout > FrameLayout[childCount>2] > @View[clickable=true] + TextView",
          "key": 0
        }
      ]
    },
    {
      "name": "更新提示",
      "enable": false,
      "order": -9,
      "key": 3,
      "rules": [
        {
          "matches": "[text*=\"新版本\"] +(2) [text=\"取消\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-会员限时优惠弹窗",
      "enable": false,
      "key": 4,
      "rules": [
        {
          "matches": "@[id=\"io.iftech.android.box:id/ivClose\"] + [text^=\"限时\"][text$=\"特惠\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-第三方 SDK 广告",
      "enable": false,
      "key": 5,
      "rules": [
        {
          "matches": "@Image[text=\"\"] < View +(n) View >(2) TextView[text=\"广告\"]",
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "name": "穿山甲",
          "snapshotUrls": "https://i.gkd.li/import/12706209",
          "key": 0
        },
        {
          "matches": "ImageView - FrameLayout > ImageView[id=null]",
          "activityIds": "io.iftech.android.box.main.HomeActivity",
          "name": "优量汇",
          "snapshotUrls": "https://i.gkd.li/import/12706209",
          "key": 1
        },
        {
          "matches": "[id=\"io.iftech.android.box:id/anythink_myoffer_btn_close_id\"]",
          "activityIds": "com.anythink.basead.ui.ATPortraitTranslucentActivity",
          "name": "百青藤",
          "snapshotUrls": "https://i.gkd.li/import/12706228",
          "key": 2
        },
        {
          "matches": "@ImageView[id=null][clickable=true] + RelativeLayout + ImageView + ImageView",
          "activityIds": "com.baidu.mobads.sdk.api.MobRewardVideoActivity",
          "name": "百青藤2",
          "snapshotUrls": "https://i.gkd.li/import/12706236",
          "key": 3
        },
        {
          "matches": "@ImageView[id=null][clickable=true] + RelativeLayout > RelativeLayout > ImageView + ImageView",
          "activityIds": "com.baidu.mobads.sdk.api.MobRewardVideoActivity",
          "name": "百青藤3",
          "snapshotUrls": "https://i.gkd.li/import/12706240",
          "key": 4
        }
      ]
    },
    {
      "name": "更新弹窗",
      "enable": false,
      "key": 6,
      "rules": [
        {
          "matches": "[text*=\"新版本\"] +(2) [text=\"取消\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "第三方 SDK 广告",
      "enable": false,
      "key": 7,
      "rules": [
        {
          "matches": "@Image[text=\"\"] < View +(n) View >(2) TextView[text=\"广告\"]",
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "name": "穿山甲",
          "snapshotUrls": "https://i.gkd.li/import/12706209",
          "key": 0
        },
        {
          "matches": "ImageView - FrameLayout > ImageView[id=null]",
          "activityIds": "io.iftech.android.box.main.HomeActivity",
          "name": "优量汇",
          "snapshotUrls": "https://i.gkd.li/import/12706209",
          "key": 1
        },
        {
          "matches": "[id=\"io.iftech.android.box:id/anythink_myoffer_btn_close_id\"]",
          "activityIds": "com.anythink.basead.ui.ATPortraitTranslucentActivity",
          "name": "百青藤",
          "snapshotUrls": "https://i.gkd.li/import/12706228",
          "key": 2
        },
        {
          "matches": "@ImageView[id=null][clickable=true] + RelativeLayout + ImageView + ImageView",
          "activityIds": "com.baidu.mobads.sdk.api.MobRewardVideoActivity",
          "name": "百青藤",
          "snapshotUrls": "https://i.gkd.li/import/12706236",
          "key": 3
        },
        {
          "matches": "@ImageView[id=null][clickable=true] + RelativeLayout > RelativeLayout > ImageView + ImageView",
          "activityIds": "com.baidu.mobads.sdk.api.MobRewardVideoActivity",
          "name": "百青藤",
          "snapshotUrls": "https://i.gkd.li/import/12706240",
          "key": 4
        }
      ]
    },
    {
      "name": "会员限时优惠弹窗",
      "enable": false,
      "key": 8,
      "rules": [
        {
          "matches": "@[id=\"io.iftech.android.box:id/ivClose\"] + [text^=\"限时\"][text$=\"特惠\"]",
          "key": 0
        }
      ]
    }
  ]
});
