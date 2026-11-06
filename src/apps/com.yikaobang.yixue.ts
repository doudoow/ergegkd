// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "医考帮",
  "id": "com.yikaobang.yixue",
  "groups": [
    {
      "name": "全屏广告-会员活动弹窗",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "@ImageView[id=\"com.yikaobang.yixue:id/close\"]",
          "activityIds": "com.psychiatrygarden.activity.HomePageNewActivity",
          "snapshotUrls": "https://i.gkd.li/i/13425853",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-应用内会员活动弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "@ImageView[id=\"com.yikaobang.yixue:id/close\"]",
          "snapshotUrls": "https://i.gkd.li/i/13425853",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-弹窗广告",
      "desc": "点击x掉",
      "key": 2,
      "rules": [
        {
          "matches": "ImageView[vid=\"close\"]",
          "activityIds": "com.psychiatrygarden.activity.HomePageNewActivity",
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/13425853",
            "https://i.gkd.li/i/28434183"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告",
      "desc": "顶部轮播图广告",
      "key": 3,
      "rules": [
        {
          "matches": "[vid=\"iv_ad_close\"]",
          "activityIds": "com.psychiatrygarden.activity.HomePageNewActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/28434131",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-悬浮窗广告",
      "desc": "点击x掉",
      "key": 4,
      "rules": [
        {
          "matches": "[vid=\"iv_delete\"][visibleToUser=true]",
          "actionCd": 3000,
          "activityIds": "com.psychiatrygarden.activity.HomePageNewActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/28434131",
          "excludeSnapshotUrls": "https://i.gkd.li/i/28434273",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-应用内会员活动弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 5,
      "rules": [
        {
          "matches": "@ImageView[id=\"com.yikaobang.yixue:id/close\"]",
          "snapshotUrls": "https://i.gkd.li/import/13425853",
          "key": 0
        }
      ]
    },
    {
      "name": "应用内会员活动弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "quickFind": true,
      "key": 6,
      "rules": [
        {
          "matches": "@ImageView[id=\"com.yikaobang.yixue:id/close\"]",
          "snapshotUrls": "https://i.gkd.li/import/13425853",
          "key": 0
        }
      ]
    }
  ]
});
