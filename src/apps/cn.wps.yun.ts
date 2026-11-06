// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "金山文档",
  "id": "cn.wps.yun",
  "groups": [
    {
      "name": "局部广告-列表卡片广告",
      "desc": "点击右侧x",
      "enable": false,
      "key": 0,
      "rules": [
        {
          "matches": "[id=\"cn.wps.yun:id/rootGroup\"][childCount=5] >  [text^=\"实用技巧\"] +3 [id=\"cn.wps.yun:id/moreIconRight\"]",
          "activityIds": "cn.wps.yun.ui.IndexActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/13495062",
          "excludeSnapshotUrls": "https://i.gkd.li/i/14333322",
          "exampleUrls": "https://m.gkd.li/47232102/bc97cb52-aad0-4114-a548-5831edbe342d",
          "key": 0
        },
        {
          "matches": "[vid=\"rootGroup\"][childCount=5] >  [text^=\"实用技巧\"] +3 [vid=\"moreIconRight\"]",
          "activityIds": ".ui.IndexActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/13495062",
          "excludeSnapshotUrls": "https://i.gkd.li/i/14333322",
          "exampleUrls": "https://m.gkd.li/47232102/bc97cb52-aad0-4114-a548-5831edbe342d",
          "key": 1
        }
      ]
    },
    {
      "name": "更新提示",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "[text=\"发现新版本\"] +3 [text=\"取消\"]",
          "activityIds": ".ui.IndexActivity",
          "snapshotUrls": "https://i.gkd.li/i/14333103",
          "key": 0
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
      "key": 2,
      "rules": [
        {
          "matches": "[text=\"开启推送通知\"] +2 * > [text=\"取消\"]",
          "activityIds": ".ui.IndexActivity",
          "snapshotUrls": "https://i.gkd.li/i/14333362",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-列表广告",
      "desc": "点击右侧x",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": "[id=\"cn.wps.yun:id/rootGroup\"][childCount=5] >  [id=\"cn.wps.yun:id/moreIconRight\"]",
          "activityIds": "cn.wps.yun.ui.IndexActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/13495062",
          "exampleUrls": "https://m.gkd.li/47232102/bc97cb52-aad0-4114-a548-5831edbe342d",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-列表广告",
      "desc": "点击右侧x",
      "enable": false,
      "fastQuery": true,
      "key": 4,
      "rules": [
        {
          "matches": "[id=\"cn.wps.yun:id/rootGroup\"][childCount=5] >  [id=\"cn.wps.yun:id/moreIconRight\"]",
          "activityIds": "cn.wps.yun.ui.IndexActivity",
          "snapshotUrls": "https://i.gkd.li/import/13495062",
          "exampleUrls": "https://m.gkd.li/47232102/bc97cb52-aad0-4114-a548-5831edbe342d",
          "key": 0
        }
      ]
    },
    {
      "name": "列表广告",
      "desc": "点击右侧x",
      "enable": false,
      "key": 5,
      "rules": [
        {
          "matches": "[id=\"cn.wps.yun:id/rootGroup\"][childCount=5] >  [id=\"cn.wps.yun:id/moreIconRight\"]",
          "activityIds": "cn.wps.yun.ui.IndexActivity",
          "quickFind": true,
          "snapshotUrls": "https://i.gkd.li/import/13495062",
          "exampleUrls": "https://m.gkd.li/47232102/bc97cb52-aad0-4114-a548-5831edbe342d",
          "key": 0
        }
      ]
    }
  ]
});
