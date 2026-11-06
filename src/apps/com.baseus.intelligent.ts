// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "倍思",
  "id": "com.baseus.intelligent",
  "groups": [
    {
      "name": "权限提示-定位请求",
      "desc": "点击取消-点击取消",
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "@[text=\"取消\"] + [text=\"前往设置\"]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/13827653"
        },
        {
          "matches": "@[text=\"取消\"] + [text=\"授权\"]",
          "preKeys": 0,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/13827986"
        }
      ]
    },
    {
      "name": "权限提示-定位权限",
      "desc": "点击取消-点击取消",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": "@[text=\"取消\"] + [text=\"前往设置\"]",
          "activityIds": "com.baseus.intelligent.view.home.MainActivity",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/13827653"
        },
        {
          "matches": "@[text=\"取消\"] + [text=\"授权\"]",
          "preKeys": 0,
          "activityIds": "com.baseus.intelligent.view.home.MainActivity",
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/13827986"
        }
      ]
    },
    {
      "name": "权限提示-定位提示-定位请求",
      "desc": "点击取消-点击取消",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "@[text=\"取消\"] + [text=\"前往设置\"]",
          "activityIds": "com.baseus.intelligent.view.home.MainActivity",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/import/13827653"
        },
        {
          "matches": "@[text=\"取消\"] + [text=\"授权\"]",
          "preKeys": 0,
          "activityIds": "com.baseus.intelligent.view.home.MainActivity",
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/import/13827986"
        }
      ]
    },
    {
      "name": "定位提示-定位请求",
      "desc": "点击取消-点击取消",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": "@[text=\"取消\"] + [text=\"前往设置\"]",
          "activityIds": "com.baseus.intelligent.view.home.MainActivity",
          "quickFind": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/import/13827653"
        },
        {
          "matches": "@[text=\"取消\"] + [text=\"授权\"]",
          "preKeys": 0,
          "activityIds": "com.baseus.intelligent.view.home.MainActivity",
          "quickFind": true,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/import/13827986"
        }
      ]
    }
  ]
});
