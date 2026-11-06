// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "云视通",
  "id": "com.jovetech.CloudSee.temp",
  "groups": [
    {
      "name": "局部广告-卡片广告",
      "desc": "点击关闭",
      "enable": false,
      "key": 0,
      "rules": [
        {
          "matches": "FrameLayout[childCount=5] > FrameLayout[childCount=1] > @ImageView[childCount=0][text=null] <<n [vid=\"mAdContainer\"]",
          "activityIds": "com.jovision.saas.multiplay.ui.JVMultiPlayActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/16537379",
          "exampleUrls": "https://e.gkd.li/1118299d-d74c-4f64-b5c8-fa1d8d2a48db",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 1,
      "rules": [
        {
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] <n FrameLayout >(2,3) [text^=\"立即\" || text$=\"详情\" || text^=\"了解\" || text=\"去微信看看\" || text$=\"应用\" || text=\"进入小程序\" || text=\"领取优惠\" || text=\"跳转微信\"]",
          "activityIds": "com.jovision.saas.ui.activity.main.MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/16567977",
          "exampleUrls": "https://e.gkd.li/92d3c1a3-3990-4f2c-b564-6f79f69f9b14",
          "key": 0
        }
      ]
    }
  ]
});
