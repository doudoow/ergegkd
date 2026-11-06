// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "随身行",
  "id": "com.wenhua.bamboo",
  "groups": [
    {
      "name": "权限提示-通知权限",
      "desc": "点击稍后再说",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "@Button[text=\"稍后再说\"] +2 Button[text=\"马上开启\"]",
          "activityIds": ".screen.activity.MarketOptionActivity",
          "snapshotUrls": "https://i.gkd.li/i/13407555",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-通知弹窗",
      "desc": "点击稍后再说",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "@Button[text=\"稍后再说\"] +2 Button[text=\"马上开启\"]",
          "activityIds": "com.wenhua.bamboo.screen.activity.MarketOptionActivity",
          "snapshotUrls": "https://i.gkd.li/i/13407555",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-通知弹窗",
      "desc": "点击稍后再说",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": "@Button[text=\"稍后再说\"] +2 Button[text=\"马上开启\"]",
          "activityIds": "com.wenhua.bamboo.screen.activity.MarketOptionActivity",
          "snapshotUrls": "https://i.gkd.li/import/13407555",
          "key": 0
        }
      ]
    },
    {
      "name": "通知弹窗",
      "desc": "点击稍后再说",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "quickFind": true,
      "key": 3,
      "rules": [
        {
          "matches": "@Button[text=\"稍后再说\"] +2 Button[text=\"马上开启\"]",
          "activityIds": "com.wenhua.bamboo.screen.activity.MarketOptionActivity",
          "snapshotUrls": "https://i.gkd.li/import/13407555",
          "key": 0
        }
      ]
    }
  ]
});
