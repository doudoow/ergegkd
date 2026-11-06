// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "财联社",
  "id": "com.lanjinger.choiassociatedpress",
  "groups": [
    {
      "name": "全屏广告-首页弹窗广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "@ImageView[id$=\"iv_back\"][clickable=true]",
          "activityIds": "com.lanjinger.choiassociatedpress.main.OperateActivity",
          "snapshotUrls": "https://i.gkd.li/i/13749206",
          "key": 0
        },
        {
          "matches": "@ImageView[id$=\"iv_back\"][clickable=true]",
          "activityIds": ".main.OperateActivity",
          "snapshotUrls": "https://i.gkd.li/i/13749206",
          "key": 1
        }
      ]
    },
    {
      "name": "未分类-首页-弹窗广告",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "@ImageView[id$=\"iv_back\"][clickable=true]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-首页-弹窗广告",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": "@ImageView[id$=\"iv_back\"][clickable=true]",
          "key": 0
        }
      ]
    },
    {
      "name": "首页-弹窗广告",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "quickFind": true,
      "key": 3,
      "rules": [
        {
          "matches": "@ImageView[id$=\"iv_back\"][clickable=true]",
          "key": 0
        }
      ]
    }
  ]
});
