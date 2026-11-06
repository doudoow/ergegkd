// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "西瓜视频",
  "id": "com.ss.android.article.video",
  "groups": [
    {
      "name": "更新提示",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "order": -9,
      "key": 0,
      "rules": [
        {
          "matches": "@[desc=\"关闭\"] - LinearLayout > [text=\"立即升级\"]",
          "activityIds": ".activity.SplashActivity",
          "snapshotUrls": "https://i.gkd.li/i/13328430",
          "key": 0
        },
        {
          "matches": "@[desc=\"关闭\"] - LinearLayout > [text=\"立即升级\"]",
          "key": 1
        }
      ]
    },
    {
      "name": "权限提示-通知权限",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": [
            "[text=\"开启推送通知\"]",
            "[text=\"暂不开启\"]"
          ],
          "activityIds": ".activity.SplashActivity",
          "snapshotUrls": "https://i.gkd.li/i/13456568",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-红包弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": "@FlattenUIImage[clickable=true] -2 [text=\"开心收下\"]",
          "activityIds": "com.ss.android.article.video.activity.SplashActivity",
          "snapshotUrls": "https://i.gkd.li/i/13620299",
          "key": 0
        },
        {
          "matches": "@FlattenUIImage[clickable=true] -2 [text=\"开心收下\"]",
          "activityIds": ".activity.SplashActivity",
          "snapshotUrls": "https://i.gkd.li/i/13620299",
          "key": 1
        },
        {
          "matches": "@FlattenUIImage[clickable=true] -2 [text=\"开心收下\"]",
          "key": 2
        }
      ]
    },
    {
      "name": "未分类-通知弹窗",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "activity",
      "fastQuery": true,
      "key": 3,
      "rules": [
        {
          "matches": "@TextView[id=\"com.ss.android.article.video:id/sj\"][text=\"暂不开启\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-红包弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 4,
      "rules": [
        {
          "matches": "@FlattenUIImage[clickable=true] -2 [text=\"开心收下\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "青少年模式",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 5,
      "rules": [
        {
          "matches": "[text$=\"青少年模式\"] +n [text=\"我知道了\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-通知弹窗",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "activity",
      "fastQuery": true,
      "key": 6,
      "rules": [
        {
          "matches": "@TextView[id=\"com.ss.android.article.video:id/sj\"][text=\"暂不开启\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "priorityTime": 10000,
      "order": -10,
      "key": 7,
      "rules": [
        {
          "matches": "[text*=\"跳过\"][text.length<10][visibleToUser=true]",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/17530523",
          "exampleUrls": "https://e.gkd.li/6f8312b0-e110-4098-9db9-48358069601a",
          "key": 0
        }
      ]
    },
    {
      "name": "青少年模式弹窗",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "quickFind": true,
      "key": 8,
      "rules": [
        {
          "matches": "[text$=\"青少年模式\"] +n [text=\"我知道了\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "更新弹窗",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "quickFind": true,
      "key": 9,
      "rules": [
        {
          "matches": "@[desc=\"关闭\"] - LinearLayout > [text=\"立即升级\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "通知弹窗",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "activity",
      "quickFind": true,
      "key": 10,
      "rules": [
        {
          "matches": "@TextView[id=\"com.ss.android.article.video:id/sj\"][text=\"暂不开启\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "红包弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "quickFind": true,
      "key": 11,
      "rules": [
        {
          "matches": "@FlattenUIImage[clickable=true] -2 [text=\"开心收下\"]",
          "key": 0
        }
      ]
    }
  ]
});
