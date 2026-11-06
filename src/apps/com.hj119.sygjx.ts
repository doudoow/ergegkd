// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "实用工具箱",
  "id": "com.hj119.sygjx",
  "groups": [
    {
      "name": "全屏广告-弹窗广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "@ImageView[childCount=0][text=null][desc=null][id=null][visibleToUser=true][width<90 && height<90] < FrameLayout[childCount=1][text=null][desc=null][id=null][parent.childCount>3] <n FrameLayout >(2,3) [text^=\"立即\" || text$=\"详情\" || text^=\"了解\" || text=\"去微信看看\" || text$=\"应用\" || text=\"进入小程序\" || text=\"领取优惠\" || text=\"跳转微信\"]",
          "snapshotUrls": "https://i.gkd.li/i/13226595",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-广告弹窗",
      "enable": false,
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "@ImageView < FrameLayout +2 FrameLayout[childCount=2] > FrameLayout > TextView[text=\"立即下载\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-广告弹窗",
      "enable": false,
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": "@ImageView < FrameLayout +2 FrameLayout[childCount=2] > FrameLayout > TextView[text=\"立即下载\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "广告弹窗",
      "enable": false,
      "quickFind": true,
      "key": 3,
      "rules": [
        {
          "matches": "@ImageView < FrameLayout +2 FrameLayout[childCount=2] > FrameLayout > TextView[text=\"立即下载\"]",
          "key": 0
        }
      ]
    }
  ]
});
