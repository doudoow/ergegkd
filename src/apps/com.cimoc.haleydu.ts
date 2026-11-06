// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "Cimoc",
  "id": "com.cimoc.haleydu",
  "groups": [
    {
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] <n FrameLayout >(2,3) [text^=\"立即\" || text$=\"详情\" || text^=\"了解\" || text=\"去微信看看\" || text$=\"应用\" || text=\"进入小程序\" || text=\"领取优惠\" || text=\"跳转微信\"]",
          "activityIds": "com.haleydu.cimoc.ui.activity.MainActivity",
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/14318224",
            "https://i.gkd.li/i/14318235",
            "https://i.gkd.li/i/14318236"
          ],
          "exampleUrls": "https://e.gkd.li/bc2e0453-1da8-43db-ad18-ec69d72e3c75"
        }
      ]
    },
    {
      "name": "全屏广告-广告弹窗",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": "[id=\"android:id/content\"] >3 FrameLayout[childCount>=2] > FrameLayout[childCount=1] > ImageView",
          "key": 0,
          "name": "腾讯SDK",
          "snapshotUrls": [
            "https://i.gkd.li/i/14093335",
            "https://i.gkd.li/i/14318885"
          ]
        }
      ]
    }
  ]
});
