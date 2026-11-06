// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "ToDesk",
  "id": "youqu.android.todesk",
  "groups": [
    {
      "name": "局部广告-卡片广告",
      "desc": "关闭卡片广告",
      "enable": false,
      "key": 0,
      "rules": [
        {
          "matches": "[id=\"youqu.android.todesk:id/ivAdClose\" || id=\"youqu.android.todesk:id/llClose\"]",
          "activityIds": [
            "youqu.android.todesk.activity.WelcomeActivity",
            "youqu.android.todesk.activity.MainActivity"
          ],
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/14175556",
            "https://i.gkd.li/i/13228546"
          ],
          "exampleUrls": "https://m.gkd.li/57941037/7535a849-b4a7-4dd5-a6c1-4d3def042d70"
        },
        {
          "matches": "[vid=\"ivAdClose\" || vid=\"llClose\"]",
          "activityIds": [
            ".activity.WelcomeActivity",
            ".activity.MainActivity"
          ],
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/i/14175556",
            "https://i.gkd.li/i/13228546"
          ],
          "exampleUrls": "https://m.gkd.li/57941037/7535a849-b4a7-4dd5-a6c1-4d3def042d70"
        }
      ]
    },
    {
      "name": "局部广告-广告卡片",
      "desc": "设备列表和连接界面中的广告卡片",
      "enable": false,
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "[id=\"youqu.android.todesk:id/sivDeviceBanner\"] + [id=\"youqu.android.todesk:id/llClose\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "通知提示-套餐到期",
      "desc": "①选[不再提示] ②点击x掉",
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": "[vid=\"tvNotNotice\"]",
          "actionMaximum": 1,
          "resetMatch": "app",
          "key": 0
        },
        {
          "matches": "[vid=\"ivClose\"][clickable=true]",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/27383310"
        }
      ]
    },
    {
      "name": "广告卡片",
      "desc": "设备列表和连接界面中的广告卡片",
      "enable": false,
      "quickFind": true,
      "key": 3,
      "rules": [
        {
          "matches": "[id=\"youqu.android.todesk:id/sivDeviceBanner\"] + [id=\"youqu.android.todesk:id/llClose\"]",
          "key": 0
        }
      ]
    }
  ]
});
