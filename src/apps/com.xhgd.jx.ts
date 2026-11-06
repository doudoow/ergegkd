// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "柠檬解析",
  "id": "com.xhgd.jx",
  "groups": [
    {
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] <n FrameLayout >(2,3) [text^=\"立即\" || text$=\"详情\" || text^=\"了解\" || text=\"去微信看看\" || text$=\"应用\" || text=\"进入小程序\" || text=\"领取优惠\" || text=\"跳转微信\"]",
          "key": 0,
          "name": "腾讯SDK",
          "snapshotUrls": "https://i.gkd.li/i/13762226"
        },
        {
          "matches": "FrameLayout[childCount=4] > FrameLayout[index=1]",
          "key": 1,
          "name": "腾讯SDK",
          "snapshotUrls": "https://i.gkd.li/import/13762226"
        }
      ]
    },
    {
      "name": "未分类-弹窗广告",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "key": 1,
      "rules": [
        {
          "matches": "FrameLayout[childCount=4] > FrameLayout[index=1]",
          "key": 0,
          "name": "腾讯SDK",
          "snapshotUrls": "https://i.gkd.li/i/13762226"
        }
      ]
    },
    {
      "name": "弹窗广告",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "key": 2,
      "rules": [
        {
          "matches": "FrameLayout[childCount=4] > FrameLayout[index=1]",
          "key": 0,
          "name": "腾讯SDK",
          "snapshotUrls": "https://i.gkd.li/import/13762226"
        }
      ]
    }
  ]
});
