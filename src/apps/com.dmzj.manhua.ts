// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "动漫之家",
  "id": "com.dmzj.manhua",
  "groups": [
    {
      "name": "全屏广告-弹窗广告",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "[id=\"com.dmzj.manhua:id/iv_close\"]",
          "activityIds": "com.dmzj.manhua.ui.LaunchInterceptorActivity",
          "snapshotUrls": "https://i.gkd.li/i/13542503",
          "key": 0
        },
        {
          "matches": "[vid=\"iv_close\"]",
          "activityIds": ".ui.LaunchInterceptorActivity",
          "snapshotUrls": "https://i.gkd.li/i/13542503",
          "key": 1
        },
        {
          "matches": "[id=\"com.dmzj.manhua:id/iv_close\"]",
          "key": 2
        }
      ]
    },
    {
      "name": "局部广告-悬浮广告",
      "desc": "点击取消",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "[id=\"com.dmzj.manhua:id/ivAdClose\"]",
          "activityIds": "com.dmzj.manhua.ui.home.HomeTabsActivitys",
          "snapshotUrls": "https://i.gkd.li/i/13542506",
          "key": 0
        },
        {
          "matches": "[vid=\"ivAdClose\"]",
          "activityIds": ".ui.home.HomeTabsActivitys",
          "snapshotUrls": "https://i.gkd.li/i/13542506",
          "key": 1
        }
      ]
    },
    {
      "name": "未分类-弹窗广告",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "activity",
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": "[id=\"com.dmzj.manhua:id/iv_close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-主页-浮窗",
      "desc": "浮窗-您想运行会员系统吗？",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "activity",
      "fastQuery": true,
      "key": 3,
      "rules": [
        {
          "matches": "@[id=\"com.dmzj.manhua:id/ivAdClose\"] - [id=\"com.dmzj.manhua:id/ivFloatAd\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-主页-浮窗",
      "desc": "浮窗-您想运行会员系统吗？",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "activity",
      "fastQuery": true,
      "key": 4,
      "rules": [
        {
          "matches": "@[id=\"com.dmzj.manhua:id/ivAdClose\"] - [id=\"com.dmzj.manhua:id/ivFloatAd\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "弹窗广告",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "activity",
      "quickFind": true,
      "key": 5,
      "rules": [
        {
          "matches": "[id=\"com.dmzj.manhua:id/iv_close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "主页-浮窗",
      "desc": "浮窗-您想运行会员系统吗？",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "activity",
      "quickFind": true,
      "key": 6,
      "rules": [
        {
          "matches": "@[id=\"com.dmzj.manhua:id/ivAdClose\"] - [id=\"com.dmzj.manhua:id/ivFloatAd\"]",
          "key": 0
        }
      ]
    }
  ]
});
