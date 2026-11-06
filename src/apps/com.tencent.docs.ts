// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "腾讯文档",
  "id": "com.tencent.docs",
  "groups": [
    {
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "priorityTime": 10000,
      "fastQuery": true,
      "quickFind": true,
      "order": -10,
      "key": 0,
      "rules": [
        {
          "matches": "@LinearLayout[clickable=true] - [text^=\"互动广告\"][visibleToUser=true]",
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/13198082",
            "https://i.gkd.li/i/23557410"
          ]
        },
        {
          "matches": "@LinearLayout > [id=\"com.tencent.docs:id/tv_gdt_ad_text\"]",
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
      "order": -9,
      "key": 1,
      "rules": [
        {
          "matches": "@[desc=\"暂不更新\"] + [desc=\"现在更新\"]",
          "activityIds": ".DocsFlutterActivity",
          "snapshotUrls": "https://i.gkd.li/i/13198091",
          "key": 0
        },
        {
          "matches": "@[desc=\"暂不更新\"] + [desc=\"现在更新\"]",
          "key": 1
        }
      ]
    },
    {
      "name": "局部广告-卡片广告",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "@ImageView[clickable=true] - [desc=\"限时购买\"]",
          "activityIds": "com.tencent.docs.DocsFlutterActivity",
          "snapshotUrls": "https://i.gkd.li/i/13198097",
          "key": 0
        },
        {
          "matches": "@ImageView[clickable=true] - [desc=\"限时购买\"]",
          "activityIds": ".DocsFlutterActivity",
          "snapshotUrls": "https://i.gkd.li/i/13198097",
          "key": 1
        }
      ]
    },
    {
      "name": "全屏广告-弹窗广告",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": "View[childCount=2] > @TextView[id=null][clickable=true] + View",
          "actionDelay": 200,
          "activityIds": "com.tencent.docs.DocsFlutterActivity",
          "snapshotUrls": "https://i.gkd.li/i/13242404",
          "key": 0
        },
        {
          "matches": "View[childCount=2] > @TextView[id=null][clickable=true] + View",
          "actionDelay": 200,
          "activityIds": ".DocsFlutterActivity",
          "snapshotUrls": "https://i.gkd.li/i/13242404",
          "key": 1
        }
      ]
    },
    {
      "name": "未分类-广告卡片",
      "enable": false,
      "key": 4,
      "rules": [
        {
          "matches": "[desc=\"限时购买\"] + ImageView[clickable=true]",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-广告弹窗",
      "enable": false,
      "actionDelay": 200,
      "key": 5,
      "rules": [
        {
          "matches": "View[childCount=2] > @TextView[id=null][clickable=true] + View",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-广告卡片",
      "enable": false,
      "key": 6,
      "rules": [
        {
          "matches": "[desc=\"限时购买\"] + ImageView[clickable=true]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-广告弹窗",
      "enable": false,
      "actionDelay": 200,
      "key": 7,
      "rules": [
        {
          "matches": "View[childCount=2] > @TextView[id=null][clickable=true] + View",
          "key": 0
        }
      ]
    },
    {
      "name": "更新弹窗",
      "enable": false,
      "actionMaximum": 1,
      "key": 8,
      "rules": [
        {
          "matches": "@[desc=\"暂不更新\"] + [desc=\"现在更新\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "广告卡片",
      "enable": false,
      "key": 9,
      "rules": [
        {
          "matches": "[desc=\"限时购买\"] + ImageView[clickable=true]",
          "key": 0
        }
      ]
    },
    {
      "name": "广告弹窗",
      "enable": false,
      "actionDelay": 200,
      "key": 10,
      "rules": [
        {
          "matches": "View[childCount=2] > @TextView[id=null][clickable=true] + View",
          "key": 0
        }
      ]
    }
  ]
});
