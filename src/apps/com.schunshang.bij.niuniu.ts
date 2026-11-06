// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "牛牛视频",
  "id": "com.schunshang.bij.niuniu",
  "groups": [
    {
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null] <2 FrameLayout[childCount=5] + FrameLayout[childCount=2] > [text^=\"立即\" || text$=\"详情\" || text^=\"了解\" || text=\"去逛逛\" || text=\"去微信看看\" || text$=\"应用\" || text=\"进入小程序\" || text=\"领取优惠\" || text=\"跳转微信\"]",
          "activityIds": "com.sexy.goddess.tab.RootActivity",
          "key": 0,
          "name": "腾讯广告-1",
          "snapshotUrls": "https://i.gkd.li/i/13635127"
        },
        {
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] <n FrameLayout >(2,3) [text^=\"立即\" || text$=\"详情\" || text^=\"了解\" || text=\"去微信看看\" || text$=\"应用\" || text=\"进入小程序\" || text=\"领取优惠\" || text=\"跳转微信\"]",
          "activityIds": "com.sexy.goddess.tab.RootActivity",
          "key": 1,
          "name": "腾讯广告-2",
          "snapshotUrls": "https://i.gkd.li/i/13635128"
        },
        {
          "matches": "ImageView -2 FrameLayout > FrameLayout > ImageView + FrameLayout[childCount=1] > ImageView[childCount=0]",
          "activityIds": "com.sexy.goddess.tab.RootActivity",
          "key": 2,
          "name": "腾讯广告-1",
          "snapshotUrls": "https://i.gkd.li/import/13635127"
        },
        {
          "matches": "ImageView -2 FrameLayout > FrameLayout[childCount=1] > ImageView[childCount=0]",
          "activityIds": "com.sexy.goddess.tab.RootActivity",
          "key": 3,
          "name": "腾讯广告-2",
          "snapshotUrls": "https://i.gkd.li/import/13635128"
        }
      ]
    },
    {
      "name": "未分类-弹窗广告",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": "ImageView -2 FrameLayout > FrameLayout > ImageView + FrameLayout[childCount=1] > ImageView[childCount=0]",
          "activityIds": "com.sexy.goddess.tab.RootActivity",
          "key": 0,
          "name": "腾讯广告-1",
          "snapshotUrls": "https://i.gkd.li/i/13635127"
        },
        {
          "matches": "ImageView -2 FrameLayout > FrameLayout[childCount=1] > ImageView[childCount=0]",
          "activityIds": "com.sexy.goddess.tab.RootActivity",
          "key": 1,
          "name": "腾讯广告-2",
          "snapshotUrls": "https://i.gkd.li/i/13635128"
        }
      ]
    },
    {
      "name": "弹窗广告",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "ImageView -2 FrameLayout > FrameLayout > ImageView + FrameLayout[childCount=1] > ImageView[childCount=0]",
          "activityIds": "com.sexy.goddess.tab.RootActivity",
          "key": 0,
          "name": "腾讯广告-1",
          "snapshotUrls": "https://i.gkd.li/import/13635127"
        },
        {
          "matches": "ImageView -2 FrameLayout > FrameLayout[childCount=1] > ImageView[childCount=0]",
          "activityIds": "com.sexy.goddess.tab.RootActivity",
          "key": 1,
          "name": "腾讯广告-2",
          "snapshotUrls": "https://i.gkd.li/import/13635128"
        }
      ]
    }
  ]
});
