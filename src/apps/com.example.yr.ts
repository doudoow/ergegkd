// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "剧兔",
  "id": "com.example.yr",
  "groups": [
    {
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 0,
      "rules": [
        {
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null] <2 FrameLayout[childCount=5] + FrameLayout[childCount=2] > [text^=\"立即\" || text$=\"详情\" || text^=\"了解\" || text=\"去逛逛\" || text=\"去微信看看\" || text$=\"应用\" || text=\"进入小程序\" || text=\"领取优惠\" || text=\"跳转微信\"]",
          "activityIds": ".MainActivity",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/16115831",
          "exampleUrls": "https://e.gkd.li/be778e3c-e2fd-4223-842d-9cbbc0fb0bbb"
        },
        {
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] <n FrameLayout >(2,3) [text^=\"立即\" || text$=\"详情\" || text^=\"了解\" || text=\"去微信看看\" || text$=\"应用\" || text=\"进入小程序\" || text=\"领取优惠\" || text=\"跳转微信\"]",
          "activityIds": ".MainActivity",
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/16115830",
          "exampleUrls": "https://e.gkd.li/3c5ff634-fe35-4ceb-8e67-565ab3367313"
        }
      ]
    }
  ]
});
