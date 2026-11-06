// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "识货",
  "id": "com.hupu.shihuo",
  "groups": [
    {
      "name": "权限提示-通知权限",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "[text=\"去开启\"] + [id=\"com.hupu.shihuo:id/ivClose\"]",
          "snapshotUrls": "https://i.gkd.li/i/13704887",
          "key": 0
        },
        {
          "matches": "[text=\"去开启\"] + [vid=\"ivClose\"]",
          "snapshotUrls": "https://i.gkd.li/i/13704887",
          "key": 1
        }
      ]
    },
    {
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "key": 1,
      "rules": [
        {
          "matches": "[id=\"com.hupu.shihuo:id/fragment_container\"] >11 @ViewGroup[clickable=true] > ImageView",
          "activityIds": "com.shizhuang.duapp.modules.rn.mini.MiniReactActivity$MiniUITranslucentReactActivity",
          "snapshotUrls": "https://i.gkd.li/i/13115664",
          "key": 0
        },
        {
          "matches": "[vid=\"fragment_container\"] >11 @ViewGroup[clickable=true] > ImageView",
          "activityIds": "com.shizhuang.duapp.modules.rn.mini.MiniReactActivity$MiniUITranslucentReactActivity",
          "snapshotUrls": "https://i.gkd.li/i/13115664",
          "key": 1
        }
      ]
    },
    {
      "name": "更新提示",
      "desc": "点击[以后再说]",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": "[text=\"发现新版本\"] +2 ViewGroup > [text=\"以后再说\"]",
          "activityIds": "com.shizhi.shihuoapp.module.main.ui.main.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/14052208",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-请求消息通知",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 3,
      "rules": [
        {
          "matches": "[text^=\"通知分类\"] +n ImageView[id=\"com.hupu.shihuo:id/ivClose\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-广告弹窗",
      "desc": "点击左上角x关闭",
      "enable": false,
      "key": 4,
      "rules": [
        {
          "matches": "[id=\"com.hupu.shihuo:id/fragment_container\"] >11 @ViewGroup[clickable=true] > ImageView",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-请求消息通知",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 5,
      "rules": [
        {
          "matches": "[text^=\"通知分类\"] +n ImageView[id=\"com.hupu.shihuo:id/ivClose\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-广告弹窗",
      "desc": "点击左上角x关闭",
      "enable": false,
      "key": 6,
      "rules": [
        {
          "matches": "[id=\"com.hupu.shihuo:id/fragment_container\"] >11 @ViewGroup[clickable=true] > ImageView",
          "key": 0
        }
      ]
    },
    {
      "name": "请求消息通知",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "quickFind": true,
      "key": 7,
      "rules": [
        {
          "matches": "[text^=\"通知分类\"] +n ImageView[id=\"com.hupu.shihuo:id/ivClose\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "广告弹窗",
      "desc": "点击左上角x关闭",
      "enable": false,
      "key": 8,
      "rules": [
        {
          "matches": "[id=\"com.hupu.shihuo:id/fragment_container\"] >11 @ViewGroup[clickable=true] > ImageView",
          "key": 0
        }
      ]
    }
  ]
});
