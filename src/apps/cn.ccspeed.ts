// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "CC加速器",
  "id": "cn.ccspeed",
  "groups": [
    {
      "name": "局部广告-加速页分享抽奖浮窗",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "@ImageView[visibleToUser=true] + [id=\"cn.ccspeed:id/iv_float\"]",
          "activityIds": "cn.ccspeed.app.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/13539299",
          "key": 0
        },
        {
          "matches": "@ImageView[visibleToUser=true] + [vid=\"iv_float\"]",
          "activityIds": ".app.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/13539299",
          "key": 1
        }
      ]
    },
    {
      "name": "未分类-加速页-分享抽奖浮窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "activity",
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "FrameLayout[id=\"cn.ccspeed:id/float_layout\"] > ImageView - ImageView",
          "snapshotUrls": "https://i.gkd.li/i/13539299",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-加速页-分享抽奖浮窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "activity",
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": "ImageView[id=\"cn.ccspeed:id/iv_float\"] - @ImageView < FrameLayout[id=\"cn.ccspeed:id/float_layout\"]",
          "snapshotUrls": "https://i.gkd.li/import/13539299",
          "key": 0
        }
      ]
    },
    {
      "name": "加速页-分享抽奖浮窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "activity",
      "quickFind": true,
      "key": 3,
      "rules": [
        {
          "matches": "FrameLayout[id=\"cn.ccspeed:id/float_layout\"] > ImageView - ImageView",
          "snapshotUrls": "https://i.gkd.li/import/13539299",
          "key": 0
        }
      ]
    }
  ]
});
