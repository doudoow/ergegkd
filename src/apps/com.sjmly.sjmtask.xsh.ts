// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "小柿子",
  "id": "com.sjmly.sjmtask.xsh",
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
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] <n FrameLayout >(2,3) [text^=\"立即\" || text$=\"详情\" || text^=\"了解\" || text=\"去微信看看\" || text$=\"应用\" || text=\"进入小程序\" || text=\"领取优惠\" || text=\"跳转微信\"]",
          "activityIds": "com.sjmly.sjmtask.xsh.MainActivity",
          "fastQuery": true,
          "key": 0,
          "name": "腾讯广告",
          "snapshotUrls": "https://i.gkd.li/i/13761173"
        },
        {
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] <n FrameLayout >(2,3) [text^=\"立即\" || text$=\"详情\" || text^=\"了解\" || text=\"去微信看看\" || text$=\"应用\" || text=\"进入小程序\" || text=\"领取优惠\" || text=\"跳转微信\"]",
          "activityIds": ".MainActivity",
          "fastQuery": true,
          "key": 1,
          "name": "腾讯广告",
          "snapshotUrls": "https://i.gkd.li/i/13761173"
        },
        {
          "matches": "ImageView - FrameLayout > FrameLayout[childCount=1][index=2] > ImageView[childCount=0]",
          "activityIds": "com.sjmly.sjmtask.xsh.MainActivity",
          "key": 2,
          "name": "腾讯广告",
          "snapshotUrls": "https://i.gkd.li/import/13761173"
        }
      ]
    },
    {
      "name": "未分类-弹窗广告",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": "ImageView - FrameLayout > FrameLayout[childCount=1][index=2] > ImageView[childCount=0]",
          "activityIds": "com.sjmly.sjmtask.xsh.MainActivity",
          "key": 0,
          "name": "腾讯广告",
          "snapshotUrls": "https://i.gkd.li/i/13761173"
        }
      ]
    },
    {
      "name": "弹窗广告",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "ImageView - FrameLayout > FrameLayout[childCount=1][index=2] > ImageView[childCount=0]",
          "activityIds": "com.sjmly.sjmtask.xsh.MainActivity",
          "key": 0,
          "name": "腾讯广告",
          "snapshotUrls": "https://i.gkd.li/import/13761173"
        }
      ]
    }
  ]
});
