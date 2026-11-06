// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "OurPlay",
  "id": "com.excean.gspace",
  "groups": [
    {
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "priorityTime": 10000,
      "order": -10,
      "key": 0,
      "rules": [
        {
          "matches": "@View[clickable=true][childCount=0] +2 LinearLayout >3 [text=\"广告\"][visibleToUser=true]",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/24539921",
          "exampleUrls": "https://e.gkd.li/8bad82e1-d00c-4d39-978c-513980b94962",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-弹窗广告",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "forcedTime": 10000,
      "key": 1,
      "rules": [
        {
          "matches": "@ImageView[childCount=0][text=null][visibleToUser=true] < FrameLayout[childCount=1] <2 FrameLayout[childCount=2] <2 FrameLayout[childCount=2] <2 FrameLayout[childCount=2] - FrameLayout > [text^=\"扭动或点击\"]",
          "activityIds": "com.excelliance.kxqp.splash.SplashActivity",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/13302890"
        },
        {
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] <n FrameLayout >(2,3) [text^=\"立即\" || text$=\"详情\" || text^=\"了解\" || text=\"去微信看看\" || text$=\"应用\" || text=\"进入小程序\" || text=\"领取优惠\" || text=\"跳转微信\"]",
          "activityIds": "com.excelliance.kxqp.splash.SplashActivity",
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/13447122"
        },
        {
          "matches": "[vid=\"close_render_ad\" || vid=\"sdm_myoffer_btn_close_id\" || vid=\"anythink_myoffer_btn_close_id\"][clickable=true]",
          "activityIds": [
            "com.excelliance.kxqp.gs.main.MainActivity",
            "com.smartdigimkt.sdk.basead.ui.ATPortraitTranslucentActivity",
            "com.anythink.core.common.inner.ui.ATPortraitTranslucentActivity"
          ],
          "fastQuery": true,
          "key": 2,
          "snapshotUrls": [
            "https://i.gkd.li/i/15284762",
            "https://i.gkd.li/i/24611979",
            "https://i.gkd.li/i/25187840"
          ]
        },
        {
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null] <2 FrameLayout[childCount=5] + FrameLayout[childCount=2] > [text^=\"立即\" || text$=\"详情\" || text^=\"了解\" || text=\"去逛逛\" || text=\"去微信看看\" || text$=\"应用\" || text=\"进入小程序\" || text=\"领取优惠\" || text=\"跳转微信\"]",
          "activityIds": "com.excelliance.kxqp.gs.main.MainActivity",
          "fastQuery": true,
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/14862348",
          "exampleUrls": "https://e.gkd.li/bcba68e4-31a9-4693-b348-3f7b62fe8d3a"
        },
        {
          "matches": "@Image[childCount=0][width<60 && height<60] < View[childCount=1] < View[childCount=1] - View[childCount=1] > [text=\"反馈\"][visibleToUser=true]",
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "key": 4,
          "snapshotUrls": "https://i.gkd.li/i/24464957",
          "exampleUrls": "https://e.gkd.li/48247609-a895-494d-9e3a-4575e809fe55"
        },
        {
          "matches": "@TextView[text=\"\"][width<90 && height<90] < View[childCount=1] - View > [text=\"反馈\"][visibleToUser=true]",
          "activityIds": "com.sigmob.sdk.base.common.PortraitTransparentAdActivity",
          "key": 5,
          "snapshotUrls": "https://i.gkd.li/i/25202925"
        },
        {
          "matches": "FrameLayout[childCount=2] > LinearLayout[childCount=2] + FrameLayout[childCount=1] > ImageView",
          "activityIds": "com.excelliance.kxqp.splash.SplashActivity",
          "key": 6,
          "snapshotUrls": "https://i.gkd.li/i/13302890"
        },
        {
          "matches": "[id=\"android:id/content\"] >(3,4) FrameLayout[childCount>4] > FrameLayout[childCount=1] > ImageView",
          "activityIds": [
            "com.excelliance.kxqp.splash.SplashActivity",
            "com.excelliance.kxqp.gs.main.MainActivity"
          ],
          "key": 7,
          "snapshotUrls": [
            "https://i.gkd.li/i/13447122",
            "https://i.gkd.li/i/14862348"
          ]
        },
        {
          "matches": "[vid=\"close_render_ad\"]",
          "activityIds": "com.excelliance.kxqp.gs.main.MainActivity",
          "fastQuery": true,
          "key": 8,
          "snapshotUrls": "https://i.gkd.li/i/15284762"
        },
        {
          "matches": "FrameLayout[childCount=2] > LinearLayout[childCount=2] + FrameLayout[childCount=1] > ImageView",
          "name": "类型1",
          "snapshotUrls": "https://i.gkd.li/import/13302890",
          "key": 9
        },
        {
          "matches": "ImageView - LinearLayout - FrameLayout > FrameLayout[childCount=1] > ImageView[width<80][height<80]",
          "name": "类型2",
          "snapshotUrls": "https://i.gkd.li/import/13447122",
          "key": 10
        }
      ]
    },
    {
      "name": "弹窗广告",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "FrameLayout[childCount=2] > LinearLayout[childCount=2] + FrameLayout[childCount=1] > ImageView",
          "name": "类型1",
          "snapshotUrls": "https://i.gkd.li/import/13302890",
          "key": 0
        },
        {
          "matches": "ImageView - LinearLayout - FrameLayout > FrameLayout[childCount=1] > ImageView[width<80][height<80]",
          "name": "类型2",
          "snapshotUrls": "https://i.gkd.li/import/13447122",
          "key": 1
        }
      ]
    }
  ]
});
