// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "GoFun出行",
  "id": "com.gvsoft.gofun",
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
          "matches": "[id=\"com.gvsoft.gofun:id/cardView\"] + [id=\"com.gvsoft.gofun:id/iv_close\"]",
          "activityIds": "com.gvsoft.gofun.module.home.activity.HomeActivity",
          "snapshotUrls": "https://i.gkd.li/i/13497777",
          "key": 0
        },
        {
          "matches": "[vid=\"cardView\"] + [vid=\"iv_close\"]",
          "activityIds": ".module.home.activity.HomeActivity",
          "snapshotUrls": "https://i.gkd.li/i/13497777",
          "key": 1
        }
      ]
    },
    {
      "name": "未分类-广告弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "[id=\"com.gvsoft.gofun:id/cardView\"] + [id=\"com.gvsoft.gofun:id/iv_close\"]",
          "action": "clickCenter",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-广告弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": "[id=\"com.gvsoft.gofun:id/cardView\"] + [id=\"com.gvsoft.gofun:id/iv_close\"]",
          "action": "clickCenter",
          "key": 0
        }
      ]
    },
    {
      "name": "广告弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "quickFind": true,
      "key": 3,
      "rules": [
        {
          "matches": "[id=\"com.gvsoft.gofun:id/cardView\"] + [id=\"com.gvsoft.gofun:id/iv_close\"]",
          "action": "clickCenter",
          "key": 0
        }
      ]
    }
  ]
});
