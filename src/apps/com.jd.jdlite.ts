// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "京喜特价",
  "id": "com.jd.jdlite",
  "groups": [
    {
      "name": "全屏广告-首页弹窗广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 0,
      "rules": [
        {
          "matches": "@[desc=\"关闭页面\"] - FrameLayout >n [text=\"极速版弹窗\"]",
          "activityIds": "com.jd.jdlite.MainFrameActivity",
          "snapshotUrls": "https://i.gkd.li/i/12727396",
          "key": 0
        },
        {
          "matches": "@[desc=\"关闭页面\"] - FrameLayout >n [text=\"极速版弹窗\"]",
          "activityIds": ".MainFrameActivity",
          "snapshotUrls": "https://i.gkd.li/i/12727396",
          "key": 1
        }
      ]
    },
    {
      "name": "权限提示-通知权限",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 1,
      "rules": [
        {
          "matches": "@ImageView[clickable=true] - LinearLayout > [text=\"开启消息通知\"]",
          "activityIds": ".MainFrameActivity",
          "snapshotUrls": "https://i.gkd.li/i/13062969",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-首页广告弹窗",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "@[desc=\"关闭页面\"] - FrameLayout >n [text=\"极速版弹窗\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-请求通知权限弹窗",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": "@ImageView[clickable=true] - LinearLayout > [text=\"开启消息通知\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-首页广告弹窗",
      "enable": false,
      "key": 4,
      "rules": [
        {
          "matches": "@[desc=\"关闭页面\"] - FrameLayout >n [text=\"极速版弹窗\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-请求通知权限弹窗",
      "enable": false,
      "key": 5,
      "rules": [
        {
          "matches": "@ImageView[clickable=true] - LinearLayout > [text=\"开启消息通知\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "首页广告弹窗",
      "enable": false,
      "key": 6,
      "rules": [
        {
          "matches": "@[desc=\"关闭页面\"] - FrameLayout >n [text=\"极速版弹窗\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "请求通知权限弹窗",
      "enable": false,
      "key": 7,
      "rules": [
        {
          "matches": "@ImageView[clickable=true] - LinearLayout > [text=\"开启消息通知\"]",
          "key": 0
        }
      ]
    }
  ]
});
