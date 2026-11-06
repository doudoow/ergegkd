// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "悦享校园",
  "id": "com.klcxkj.zqxy_kaihe",
  "groups": [
    {
      "name": "局部广告",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "@ImageView[width<63] <<(1,2) [index=parent.childCount.minus(1)] - [childCount=2] > [text^=\"立即\" || text$=\"详情\" || text^=\"了解\" || text=\"去微信看看\" || text$=\"应用\" || text=\"进入小程序\" || text=\"领取优惠\" || text=\"跳转微信\"]",
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/25928209",
            "https://i.gkd.li/i/25989673",
            "https://i.gkd.li/i/25989877",
            "https://i.gkd.li/i/25929445"
          ],
          "exampleUrls": "https://e.gkd.li/22de1939-c412-40ce-a979-4aeb3f7f5923"
        },
        {
          "matches": "@ImageView[width<63] < FrameLayout <3 FrameLayout +2 FrameLayout >2 [text^=\"立即\" || text$=\"详情\" || text^=\"了解\" || text=\"去微信看看\" || text$=\"应用\" || text=\"进入小程序\" || text=\"领取优惠\" || text=\"跳转微信\"]",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/25989928"
        },
        {
          "matches": "LinearLayout[childCount=2] - @ImageView[clickable=true][visibleToUser=true] <2 FrameLayout[childCount=3] < [vid=\"adv_container_layout\"]",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/25928092",
          "exampleUrls": "https://e.gkd.li/341cfc8b-b625-4ee0-9928-f4a302f491fe"
        }
      ]
    },
    {
      "name": "全屏广告",
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "ImageView[childCount=0] < @[desc=\"top_close_button\"][childCount=1][clickable=true] < ViewGroup + * > [text=\"广告\"]",
          "activityIds": ".ui.ConsumeActivity",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/25931841",
          "exampleUrls": "https://e.gkd.li/578f3304-96d8-4e43-bfa9-07cd85ca6f8d"
        },
        {
          "matches": "@ImageView[childCount=0][visibleToUser=true] < [index=parent.childCount.minus(1)][childCount=1] <n FrameLayout[childCount=3] < * +4 * > [text$=\"查看详情\"]",
          "activityIds": ".ui.ConsumeActivity",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/25929002",
          "exampleUrls": "https://e.gkd.li/06e41609-81a1-4b71-bd32-d83b66afe247"
        },
        {
          "matches": "@ImageView < * - FrameLayout >(2,3) [text*=\"第三方应用\" || text*=\"扭动手机\" || text*=\"点击\" || text*=\"上滑\" || text*=\"省钱好物\" || text*=\"扭一扭\"]",
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Activity_T",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/25935365",
          "exampleUrls": "https://e.gkd.li/029e1258-ef6c-4474-991b-7925d9e73e9e"
        },
        {
          "matches": "@[clickable=true] > [vid=\"beizi_interstitial_ad_close_iv\"]",
          "activityIds": "com.beizi.ad.v2.activity.BeiZiNewInterstitialActivity",
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/25929116",
          "exampleUrls": "https://e.gkd.li/cca3f65f-1441-4bd6-88da-e61c325f6340"
        },
        {
          "matches": "@ImageView[width<85] < FrameLayout <2 FrameLayout <2 FrameLayout <2 * - FrameLayout > [text*=\"第三方应用\" || text*=\"扭动\" || text*=\"点击\" || text*=\"上滑\" || text*=\"省钱好物\" || text*=\"扭一扭\"]",
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Activity_T",
          "key": 4,
          "snapshotUrls": "https://i.gkd.li/i/25989677"
        },
        {
          "matches": "@Image[width<72] <<2 View <2 View < View <2 View <3 View <<8 FrameLayout <2 FrameLayout <<3 FrameLayout <3 FrameLayout <<2 [id=\"android:id/content\"]",
          "activityIds": "com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity",
          "key": 5,
          "snapshotUrls": "https://i.gkd.li/i/25991003"
        }
      ]
    }
  ]
});
