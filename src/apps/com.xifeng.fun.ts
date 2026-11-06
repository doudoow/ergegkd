// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "OmoFun",
  "id": "com.xifeng.fun",
  "groups": [
    {
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "enable": false,
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] <n FrameLayout >(2,3) [text^=\"立即\" || text$=\"详情\" || text^=\"了解\" || text=\"去微信看看\" || text$=\"应用\" || text=\"进入小程序\" || text=\"领取优惠\" || text=\"跳转微信\"]",
          "activityIds": "com.xifeng.fun.MainActivity",
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/14050836",
            "https://i.gkd.li/i/14235476",
            "https://i.gkd.li/i/14235479"
          ]
        },
        {
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null] <2 FrameLayout[childCount=5] + FrameLayout[childCount=2] > [text^=\"立即\" || text$=\"详情\" || text^=\"了解\" || text=\"去逛逛\" || text=\"去微信看看\" || text$=\"应用\" || text=\"进入小程序\" || text=\"领取优惠\" || text=\"跳转微信\"]",
          "activityIds": "com.xifeng.fun.MainActivity",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/14235478"
        },
        {
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] <n FrameLayout >(2,3) [text^=\"立即\" || text$=\"详情\" || text^=\"了解\" || text=\"去微信看看\" || text$=\"应用\" || text=\"进入小程序\" || text=\"领取优惠\" || text=\"跳转微信\"]",
          "activityIds": ".MainActivity",
          "key": 2,
          "snapshotUrls": [
            "https://i.gkd.li/i/14050836",
            "https://i.gkd.li/i/14235476",
            "https://i.gkd.li/i/14235479"
          ]
        },
        {
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null] <2 FrameLayout[childCount=5] + FrameLayout[childCount=2] > [text^=\"立即\" || text$=\"详情\" || text^=\"了解\" || text=\"去逛逛\" || text=\"去微信看看\" || text$=\"应用\" || text=\"进入小程序\" || text=\"领取优惠\" || text=\"跳转微信\"]",
          "activityIds": ".MainActivity",
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/14235478"
        },
        {
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] +n FrameLayout >(1,2) [text^=\"立即\" || text=\"查看详情\" || text=\"了解更多\" || text=\"去微信看看\" || text$=\"应用\" || text=\"进入小程序\" || text=\"领取优惠\" || text=\"跳转微信\"]",
          "activityIds": "com.xifeng.fun.MainActivity",
          "key": 4,
          "snapshotUrls": [
            "https://i.gkd.li/i/14050836",
            "https://i.gkd.li/i/14235476",
            "https://i.gkd.li/i/14235479"
          ]
        },
        {
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null] <2 FrameLayout[childCount=5] + FrameLayout[childCount=2] > [text^=\"立即\" || text=\"查看详情\" || text=\"了解更多\" || text=\"去逛逛\" || text=\"去微信看看\" || text$=\"应用\" || text=\"进入小程序\" || text=\"领取优惠\" || text=\"跳转微信\"]",
          "activityIds": "com.xifeng.fun.MainActivity",
          "key": 5,
          "snapshotUrls": "https://i.gkd.li/i/14235478"
        }
      ]
    },
    {
      "name": "通知提示-公告弹窗",
      "desc": "点击\"我知道了\"",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 1,
      "rules": [
        {
          "matches": "[desc=\"我知道了\"][clickable=true]",
          "snapshotUrls": "https://i.gkd.li/i/14235411",
          "exampleUrls": "https://m.gkd.li/57941037/971c3631-a9cc-4aec-992e-6cf1166eea1b",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-广告弹窗",
      "desc": "点击X",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "[id=\"android:id/content\"] >2 FrameLayout[childCount>2] >(1,2) FrameLayout[childCount>4] >2 ImageView",
          "activityIds": "com.xifeng.fun.MainActivity",
          "snapshotUrls": [
            "https://i.gkd.li/i/14050836",
            "https://i.gkd.li/i/14235476",
            "https://i.gkd.li/i/14235478",
            "https://i.gkd.li/i/14235479"
          ],
          "key": 0
        }
      ]
    }
  ]
});
