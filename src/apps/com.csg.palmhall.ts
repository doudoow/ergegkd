// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "南网在线",
  "id": "com.csg.palmhall",
  "groups": [
    {
      "name": "更新提示",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "order": -9,
      "key": 0,
      "rules": [
        {
          "matches": "@[text=\"关闭\"] + [text=\"升级\"]",
          "activityIds": ".MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/12700060",
          "key": 0
        },
        {
          "matches": "@[text=\"关闭\"] + [text=\"升级\"]",
          "key": 1
        }
      ]
    },
    {
      "name": "全屏广告-首页弹窗广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 1,
      "rules": [
        {
          "matches": "View > Image +(3) [text=\"不再显示\"][clickable=true]",
          "activityIds": "com.csg.palmhall.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/12700075",
          "key": 0
        },
        {
          "matches": "View > Image +(3) [text=\"不再显示\"][clickable=true]",
          "activityIds": ".MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/12700075",
          "key": 1
        }
      ]
    },
    {
      "name": "通知提示-公告弹窗",
      "desc": "点击关闭",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 2,
      "rules": [
        {
          "matches": "[text$=\"公告\"] - View[childCount=2] > Image[childCount=0][text=\"\"]",
          "activityIds": "com.csg.palmhall.MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/16478559",
          "exampleUrls": "https://e.gkd.li/0ecc2a4e-6ab9-4c00-80fe-bbd23d181be8",
          "key": 0
        },
        {
          "matches": "[text$=\"公告\"] - View[childCount=2] > Image[childCount=0][text=\"\"]",
          "activityIds": ".MainActivity",
          "snapshotUrls": "https://i.gkd.li/i/16478559",
          "exampleUrls": "https://e.gkd.li/0ecc2a4e-6ab9-4c00-80fe-bbd23d181be8",
          "key": 1
        }
      ]
    },
    {
      "name": "未分类-首页广告弹窗",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": "View > Image +(3) [text=\"不再显示\"][clickable=true]",
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
          "matches": "View > Image +(3) [text=\"不再显示\"][clickable=true]",
          "key": 0
        }
      ]
    },
    {
      "name": "更新弹窗",
      "enable": false,
      "key": 5,
      "rules": [
        {
          "matches": "@[text=\"关闭\"] + [text=\"升级\"]",
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
          "matches": "View > Image +(3) [text=\"不再显示\"][clickable=true]",
          "key": 0
        }
      ]
    }
  ]
});
