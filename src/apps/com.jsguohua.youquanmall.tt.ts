// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "图图影视",
  "id": "com.jsguohua.youquanmall.tt",
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
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] <n FrameLayout >(2,3) [text^=\"立即\" || text$=\"详情\" || text^=\"了解\" || text=\"去微信看看\" || text$=\"应用\" || text=\"进入小程序\" || text=\"领取优惠\" || text=\"跳转微信\"]",
          "activityIds": "com.zero.flutter_qq_ads.page.AdSplashActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/13163314",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-应用内弹窗",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": "[text=\"去微信看看\"] < FrameLayout <n FrameLayout[childCount=2] -n FrameLayout > ImageView",
          "snapshotUrls": "https://i.gkd.li/i/13163314",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-应用内弹窗",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "[text=\"去微信看看\"] < FrameLayout <n FrameLayout[childCount=2] -n FrameLayout > ImageView",
          "snapshotUrls": "https://i.gkd.li/import/13163314",
          "key": 0
        }
      ]
    },
    {
      "name": "应用内弹窗",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": "[text=\"去微信看看\"] < FrameLayout <n FrameLayout[childCount=2] -n FrameLayout > ImageView",
          "snapshotUrls": "https://i.gkd.li/import/13163314",
          "key": 0
        }
      ]
    }
  ]
});
