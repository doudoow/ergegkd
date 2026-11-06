// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "ZK助手",
  "id": "com.custom.zktimehelp",
  "groups": [
    {
      "name": "全屏广告-弹窗广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 0,
      "rules": [
        {
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null] <2 FrameLayout[childCount=5] + FrameLayout[childCount=2] > [text^=\"立即\" || text$=\"详情\" || text^=\"了解\" || text=\"去逛逛\" || text=\"去微信看看\" || text$=\"应用\" || text=\"进入小程序\" || text=\"领取优惠\" || text=\"跳转微信\"]",
          "activityIds": "com.custom.zktimehelp.ui.MainActivity",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/16670372",
          "exampleUrls": "https://e.gkd.li/95f17fff-486c-4cad-83c7-804b808ff800"
        },
        {
          "matches": "FrameLayout[childCount=5] > FrameLayout[childCount=2] > FrameLayout[childCount=2] >2 @FrameLayout[childCount=1] > ImageView[childCount=0]",
          "activityIds": "com.qq.e.ads.PortraitADActivity",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/16670426",
          "exampleUrls": "https://e.gkd.li/cacb889d-0328-4431-af23-d267fa4eb626"
        },
        {
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null] <2 FrameLayout[childCount=5] + FrameLayout[childCount=2] > [text^=\"立即\" || text$=\"详情\" || text^=\"了解\" || text=\"去逛逛\" || text=\"去微信看看\" || text$=\"应用\" || text=\"进入小程序\" || text=\"领取优惠\" || text=\"跳转微信\"]",
          "activityIds": ".ui.MainActivity",
          "fastQuery": true,
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/16670372",
          "exampleUrls": "https://e.gkd.li/95f17fff-486c-4cad-83c7-804b808ff800"
        }
      ]
    }
  ]
});
