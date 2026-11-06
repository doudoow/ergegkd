// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "VIVO 电子书",
  "id": "com.chaozh.iReader",
  "groups": [
    {
      "name": "权限提示",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "quickFind": true,
      "key": 0,
      "rules": [
        {
          "matches": "Button[text=\"前往开启\"] - Button[text=\"取消\"]",
          "activityIds": "com.zhangyue.iReader.read.ui.Activity_BookBrowser_TXT",
          "snapshotUrls": "https://i.gkd.li/i/13627649",
          "key": 0
        },
        {
          "matches": "Button[text=\"前往开启\"] - Button[text=\"取消\"]",
          "snapshotUrls": "https://i.gkd.li/i/13627649",
          "key": 1
        }
      ]
    },
    {
      "name": "权限提示-通知权限",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "@ImageView[clickable=true] + TextView[text=\"开启推送通知\"]",
          "activityIds": "com.zhangyue.iReader.bookshelf.ui.ActivityBookShelf",
          "snapshotUrls": "https://i.gkd.li/i/13837961",
          "key": 0
        }
      ]
    },
    {
      "name": "通知提示",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "fastQuery": true,
      "quickFind": true,
      "key": 2,
      "rules": [
        {
          "matches": "@ImageView[clickable=true] +(1,2) TextView[text=\"开启推送通知\"]",
          "snapshotUrls": "https://i.gkd.li/i/13837961",
          "key": 0
        }
      ]
    },
    {
      "name": "权限提示-通知提示",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "fastQuery": true,
      "key": 3,
      "rules": [
        {
          "matches": "@ImageView[clickable=true] +(1,2) TextView[text=\"开启推送通知\"]",
          "snapshotUrls": "https://i.gkd.li/import/13837961",
          "key": 0
        }
      ]
    }
  ]
});
