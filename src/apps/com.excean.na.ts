// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "99手游加速器",
  "id": "com.excean.na",
  "groups": [
    {
      "name": "局部广告-卡片广告",
      "desc": "点击关闭",
      "enable": false,
      "fastQuery": true,
      "quickFind": true,
      "key": 0,
      "rules": [
        {
          "matches": "[id=\"com.excean.na:id/iv_close_ad\"]",
          "activityIds": "com.excelliance.kxqp.ui.activity.GameLaunchActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/13931051",
          "key": 0
        },
        {
          "matches": "[id=\"com.excean.na:id/iv_close_ad\"]",
          "activityIds": "com.excelliance.kxqp.ui.activity.GameLaunchActivity",
          "snapshotUrls": "https://i.gkd.li/i/13931051",
          "key": 1
        },
        {
          "matches": "[vid=\"iv_close_ad\"]",
          "activityIds": "com.excelliance.kxqp.ui.activity.GameLaunchActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/13931051",
          "key": 2
        }
      ]
    },
    {
      "name": "全屏广告-首页弹窗广告",
      "desc": "点击关闭",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "quickFind": true,
      "key": 1,
      "rules": [
        {
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] <n FrameLayout >(2,3) [text^=\"立即\" || text$=\"详情\" || text^=\"了解\" || text=\"去微信看看\" || text$=\"应用\" || text=\"进入小程序\" || text=\"领取优惠\" || text=\"跳转微信\"]",
          "activityIds": "com.excelliance.kxqp.ui.MainActivity",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/13930990",
            "https://i.gkd.li/i/14001254"
          ]
        },
        {
          "matches": "Image < @View +5 * > [text=\"反馈\"]",
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/14855686"
        },
        {
          "matches": "FrameLayout[childCount>1] > FrameLayout[childCount=1] > ImageView[width<90][height<90]",
          "activityIds": "com.excelliance.kxqp.ui.MainActivity",
          "key": 2,
          "name": "腾讯SDK",
          "snapshotUrls": [
            "https://i.gkd.li/i/13930990",
            "https://i.gkd.li/i/13932190"
          ]
        },
        {
          "matches": "[id=\"android:id/content\"] >n @View[index=0] +2 TextView",
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "key": 3,
          "name": "穿山甲SDK",
          "snapshotUrls": "https://i.gkd.li/i/14855686"
        },
        {
          "matches": "@ImageView[visibleToUser=true] <<5 [id=\"android:id/content\"]",
          "activityIds": "com.excelliance.kxqp.ui.MainActivity",
          "snapshotUrls": "https://i.gkd.li/import/13930990",
          "key": 4
        }
      ]
    },
    {
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "order": -10,
      "key": 2,
      "rules": [
        {
          "matches": "FrameLayout > FrameLayout[childCount>2] > @View[clickable=true] + TextView <<n [id=\"android:id/content\"]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/14835263"
        }
      ]
    }
  ]
});
