// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "百分网游戏盒子",
  "id": "com.byfen.market",
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
          "matches": "[vid=\"idIvClose\"][clickable=true]",
          "activityIds": "com.byfen.market.ui.activity.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/13801613",
          "exampleUrls": "https://m.gkd.li/57941037/35d2a562-fe30-4bff-b739-96b37dccd05c",
          "key": 0
        },
        {
          "matches": "[vid=\"idIvClose\"][clickable=true]",
          "activityIds": ".ui.activity.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/13801613",
          "exampleUrls": "https://m.gkd.li/57941037/35d2a562-fe30-4bff-b739-96b37dccd05c",
          "key": 1
        },
        {
          "matches": "[id=\"com.byfen.market:id/idIvClose\"]",
          "key": 2
        }
      ]
    },
    {
      "name": "更新提示",
      "desc": "点击[忽略更新]",
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "[text=\"忽略更新\"][clickable=true][visibleToUser=true]",
          "activityIds": ".ui.activity.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/14322280",
          "exampleUrls": "https://m.gkd.li/57941037/e92b10b8-b0f8-4dc3-95bf-172829996600",
          "key": 0
        }
      ]
    },
    {
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "order": -10,
      "key": 2,
      "rules": [
        {
          "matches": "[id=\"com.byted.pangle:id/tt_splash_skip_btn\"]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/13298944"
        },
        {
          "matches": "[id=\"com.byfen.market:id/ad_view\"] >3 View[clickable=true]",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/13800021"
        }
      ]
    },
    {
      "name": "未分类-弹窗广告",
      "enable": false,
      "fastQuery": true,
      "key": 3,
      "rules": [
        {
          "matches": "[id=\"com.byfen.market:id/idIvClose\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "分段广告-下载管理页广告卡片",
      "enable": false,
      "key": 4,
      "rules": [
        {
          "matches": "[id=\"com.byfen.market:id/idAd\"] >n [text=\"反馈\"]",
          "key": 0,
          "name": "穿山甲SDK-点击【反馈】",
          "snapshotUrls": "https://i.gkd.li/i/13771711"
        },
        {
          "matches": "@LinearLayout > [text=\"不感兴趣\"]",
          "preKeys": 0,
          "fastQuery": true,
          "key": 1,
          "name": "穿山甲SDK-点击【不感兴趣】",
          "snapshotUrls": "https://i.gkd.li/i/13771773"
        }
      ]
    },
    {
      "name": "弹窗广告",
      "enable": false,
      "quickFind": true,
      "key": 5,
      "rules": [
        {
          "matches": "[id=\"com.byfen.market:id/idIvClose\"]",
          "key": 0
        }
      ]
    }
  ]
});
