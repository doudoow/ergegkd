// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "华尔街见闻",
  "id": "com.wallstreetcn.news",
  "groups": [
    {
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "priorityTime": 10000,
      "order": -10,
      "key": 0,
      "rules": [
        {
          "matches": "@[vid=\"iv_jump_parent\" || vid=\"iv_jump\"] -2 [text=\"广告\"][visibleToUser=true]",
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/14525329",
            "https://i.gkd.li/i/20430632"
          ],
          "exampleUrls": "https://e.gkd.li/94576b14-ad13-4fae-8d49-6b6d1b5096a7",
          "key": 0
        },
        {
          "matches": "[text=\"广告\"] +2 [text^=\"关闭\"]",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/14525329",
          "exampleUrls": "https://m.gkd.li/57941037/40e483a8-61e7-45a0-ac44-df1f472e2863",
          "key": 1
        }
      ]
    },
    {
      "name": "局部广告-卡片广告",
      "desc": "点击关闭",
      "key": 1,
      "rules": [
        {
          "matches": "[text=\"广告\" || text=\"活动\"] + [id=\"com.wallstreetcn.news:id/close\"][visibleToUser=true]",
          "activityIds": "com.wallstreetcn.news.ProxyMainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/13262717",
          "key": 0
        },
        {
          "matches": "[text=\"广告\" || text=\"活动\"] + [vid=\"close\"][visibleToUser=true]",
          "activityIds": ".ProxyMainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/13262717",
          "key": 1
        }
      ]
    },
    {
      "name": "未分类-卡片广告",
      "desc": "点击关闭, 无后续确认操作",
      "enable": false,
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": "[text=\"广告\" || text=\"活动\"] + [id=\"com.wallstreetcn.news:id/close\"][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/i/13262717",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-卡片广告",
      "desc": "点击关闭, 无后续确认操作",
      "enable": false,
      "fastQuery": true,
      "key": 3,
      "rules": [
        {
          "matches": "[text=\"广告\" || text=\"活动\"] + [id=\"com.wallstreetcn.news:id/close\"][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/import/13262717",
          "key": 0
        }
      ]
    },
    {
      "name": "卡片广告",
      "desc": "点击关闭, 无后续确认操作",
      "enable": false,
      "quickFind": true,
      "key": 4,
      "rules": [
        {
          "matches": "[text=\"广告\" || text=\"活动\"] + [id=\"com.wallstreetcn.news:id/close\"][visibleToUser=true]",
          "snapshotUrls": "https://i.gkd.li/import/13262717",
          "key": 0
        }
      ]
    }
  ]
});
