// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "安心记加班",
  "id": "com.julanling.app",
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
          "activityIds": "com.julanling.dgq.main.view.MainFragmentActivity",
          "snapshotUrls": "https://i.gkd.li/i/13523567",
          "key": 0
        },
        {
          "matches": "[vid=\"llClose\"][clickable=true]",
          "activityIds": ".calender.cal.CalendarActivity",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/28912438"
        },
        {
          "matches": "[vid=\"ivClose\"][clickable=true]",
          "activityIds": "com.julanling.lib_ad.interstitial_ads._native.page.InterstitialNativeActivity",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/28907567"
        }
      ]
    },
    {
      "name": "未分类-广告弹窗",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": "FrameLayout > FrameLayout[childCount=1] > ImageView[width<80][height<80]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-广告弹窗",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "FrameLayout > FrameLayout[childCount=1] > ImageView[width<80][height<80]",
          "key": 0
        }
      ]
    },
    {
      "name": "广告弹窗",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": "FrameLayout > FrameLayout[childCount=1] > ImageView[width<80][height<80]",
          "key": 0
        }
      ]
    }
  ]
});
