// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "4399游戏盒",
  "id": "com.m4399.gamecenter",
  "groups": [
    {
      "name": "局部广告-悬浮广告",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 0,
      "rules": [
        {
          "matches": "@[id=\"com.m4399.gamecenter:id/close\"] + [id=\"com.m4399.gamecenter:id/image\"]",
          "activityIds": "com.m4399.gamecenter.plugin.main.controllers.ApplicationActivity",
          "fastQuery": true,
          "key": 0,
          "name": "首页右侧悬浮广告",
          "snapshotUrls": "https://i.gkd.li/i/13297466"
        },
        {
          "matches": "@[vid=\"close\"] + [vid=\"image\"]",
          "activityIds": ".plugin.main.controllers.ApplicationActivity",
          "fastQuery": true,
          "key": 1,
          "name": "首页右侧悬浮广告",
          "snapshotUrls": "https://i.gkd.li/i/13297466"
        },
        {
          "matches": "[id=\"com.m4399.gamecenter:id/image\"] + [id=\"com.m4399.gamecenter:id/close\"]",
          "activityIds": "com.bbk.launcher2.Launcher",
          "key": 2,
          "name": "首页中心悬浮广告",
          "snapshotUrls": "https://i.gkd.li/import/13297551"
        }
      ]
    },
    {
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 1,
      "rules": [
        {
          "matches": "[id=\"com.m4399.gamecenter:id/image\"] + [id=\"com.m4399.gamecenter:id/close\"]",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/13297551",
          "exampleUrls": "https://e.gkd.li/28dafb84-2474-4a09-9885-9810089bad00",
          "key": 0
        },
        {
          "matches": "[vid=\"image\"] + [vid=\"close\"]",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/13297551",
          "exampleUrls": "https://e.gkd.li/28dafb84-2474-4a09-9885-9810089bad00",
          "key": 1
        }
      ]
    },
    {
      "name": "未分类-悬浮广告",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "[id=\"com.m4399.gamecenter:id/image\"] + [id=\"com.m4399.gamecenter:id/close\"]",
          "activityIds": "com.bbk.launcher2.Launcher",
          "key": 0,
          "name": "首页中心悬浮广告",
          "snapshotUrls": "https://i.gkd.li/i/13297551"
        },
        {
          "matches": "@[id=\"com.m4399.gamecenter:id/close\"] + [id=\"com.m4399.gamecenter:id/image\"]",
          "activityIds": "com.m4399.gamecenter.plugin.main.controllers.ApplicationActivity",
          "fastQuery": true,
          "key": 1,
          "name": "首页右侧悬浮广告",
          "snapshotUrls": "https://i.gkd.li/i/13297466"
        }
      ]
    },
    {
      "name": "功能类-满勤抢游戏币",
      "desc": "点击\"选这个\"",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": "View[id=\"manqin\"] > ListView > View[index=0] > [text=\"选这个\"]",
          "activityIds": ".plugin.main.controllers.activities.ActivitiesDetailActivity",
          "snapshotUrls": "https://i.gkd.li/i/26899535",
          "key": 0
        }
      ]
    },
    {
      "name": "悬浮广告",
      "enable": false,
      "key": 4,
      "rules": [
        {
          "matches": "[id=\"com.m4399.gamecenter:id/image\"] + [id=\"com.m4399.gamecenter:id/close\"]",
          "activityIds": "com.bbk.launcher2.Launcher",
          "key": 0,
          "name": "首页中心悬浮广告",
          "snapshotUrls": "https://i.gkd.li/import/13297551"
        },
        {
          "matches": "@[id=\"com.m4399.gamecenter:id/close\"] + [id=\"com.m4399.gamecenter:id/image\"]",
          "activityIds": "com.m4399.gamecenter.plugin.main.controllers.ApplicationActivity",
          "quickFind": true,
          "key": 1,
          "name": "首页右侧悬浮广告",
          "snapshotUrls": "https://i.gkd.li/import/13297466"
        }
      ]
    }
  ]
});
