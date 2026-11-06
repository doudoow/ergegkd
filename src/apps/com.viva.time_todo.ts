// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "CliCli动漫",
  "id": "com.viva.time_todo",
  "groups": [
    {
      "name": "全屏广告-弹窗广告",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 0,
      "rules": [
        {
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null] <2 FrameLayout[childCount=5] + FrameLayout[childCount=2] > [text^=\"立即\" || text$=\"详情\" || text^=\"了解\" || text=\"去逛逛\" || text=\"去微信看看\" || text$=\"应用\" || text=\"进入小程序\" || text=\"领取优惠\" || text=\"跳转微信\"]",
          "activityIds": "com.maoyun.guoguo.MainActivity",
          "fastQuery": true,
          "key": 0,
          "name": "腾讯广告",
          "snapshotUrls": "https://i.gkd.li/i/13759356"
        },
        {
          "matches": "@ImageView[clickable=true][childCount=0] - RelativeLayout >3 [text^=\"摇动手机\"]",
          "activityIds": "com.baidu.mobads.sdk.api.MobRewardVideoActivity",
          "fastQuery": true,
          "key": 1,
          "name": "百度广告",
          "snapshotUrls": "https://i.gkd.li/i/13761232"
        },
        {
          "matches": "ImageView - LinearLayout - FrameLayout > FrameLayout > FrameLayout[childCount=1] > ImageView[childCount=0]",
          "activityIds": "com.maoyun.guoguo.MainActivity",
          "key": 2,
          "name": "腾讯广告",
          "snapshotUrls": "https://i.gkd.li/import/13759356"
        },
        {
          "matches": "@ImageView[clickable=true] - RelativeLayout > RelativeLayout > ImageView + ImageView",
          "activityIds": "com.baidu.mobads.sdk.api.MobRewardVideoActivity",
          "key": 3,
          "name": "百度广告",
          "snapshotUrls": "https://i.gkd.li/import/13761232"
        }
      ]
    },
    {
      "name": "未分类-弹窗广告",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": "ImageView - LinearLayout - FrameLayout > FrameLayout > FrameLayout[childCount=1] > ImageView[childCount=0]",
          "activityIds": "com.maoyun.guoguo.MainActivity",
          "key": 0,
          "name": "腾讯广告",
          "snapshotUrls": "https://i.gkd.li/i/13759356"
        },
        {
          "matches": "@ImageView[clickable=true] - RelativeLayout > RelativeLayout > ImageView + ImageView",
          "activityIds": "com.baidu.mobads.sdk.api.MobRewardVideoActivity",
          "key": 1,
          "name": "百度广告",
          "snapshotUrls": "https://i.gkd.li/i/13761232"
        }
      ]
    },
    {
      "name": "弹窗广告",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "ImageView - LinearLayout - FrameLayout > FrameLayout > FrameLayout[childCount=1] > ImageView[childCount=0]",
          "activityIds": "com.maoyun.guoguo.MainActivity",
          "key": 0,
          "name": "腾讯广告",
          "snapshotUrls": "https://i.gkd.li/import/13759356"
        },
        {
          "matches": "@ImageView[clickable=true] - RelativeLayout > RelativeLayout > ImageView + ImageView",
          "activityIds": "com.baidu.mobads.sdk.api.MobRewardVideoActivity",
          "key": 1,
          "name": "百度广告",
          "snapshotUrls": "https://i.gkd.li/import/13761232"
        }
      ]
    }
  ]
});
