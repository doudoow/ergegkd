// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "小米浏览器",
  "id": "com.android.browser",
  "groups": [
    {
      "name": "局部广告-关闭[个性推荐开启提示]",
      "enable": false,
      "key": 0,
      "rules": [
        {
          "matches": "@ImageView[id!=null][clickable=true] -2 [text=\"个性推荐获得更丰富内容\"]",
          "snapshotUrls": "https://i.gkd.li/i/12829403",
          "key": 0
        }
      ]
    },
    {
      "name": "分段广告-主页信息流广告",
      "enable": false,
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "@[id!=null][desc=\"负反馈\"][visibleToUser=true] -n * > * > [text=\"广告\"]",
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/12894221",
            "https://i.gkd.li/i/12893649"
          ]
        },
        {
          "matches": "@FrameLayout > ViewGroup > [text=\"不感兴趣\"]",
          "preKeys": 0,
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/i/12894234",
            "https://i.gkd.li/i/13196059"
          ]
        }
      ]
    },
    {
      "name": "局部广告-搜索结果页底部必应推荐卡片",
      "desc": "点击关闭",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "[id=\"bnp_close_icon\"][visibleToUser=true]",
          "activityIds": "com.android.browser.BrowserActivity",
          "snapshotUrls": [
            "https://i.gkd.li/i/14256707",
            "https://i.gkd.li/i/14256761"
          ],
          "exampleUrls": "https://m.gkd.li/57941037/b0d601cf-6cd1-411c-8555-bd4a8ee3335c",
          "key": 0
        },
        {
          "matches": "[id=\"bnp_close_icon\"][visibleToUser=true]",
          "activityIds": ".BrowserActivity",
          "snapshotUrls": [
            "https://i.gkd.li/i/14256707",
            "https://i.gkd.li/i/14256761"
          ],
          "exampleUrls": "https://m.gkd.li/57941037/b0d601cf-6cd1-411c-8555-bd4a8ee3335c",
          "key": 1
        }
      ]
    },
    {
      "name": "分段广告-小说阅读页面广告",
      "fastQuery": true,
      "key": 3,
      "rules": [
        {
          "matches": "[vid=\"reading__app_ad_view__close\"][visibleToUser=true]",
          "excludeMatches": "[vid=\"reading__close_ad_view__subtitle_tv\"][visibleToUser=true]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/19718114",
          "excludeSnapshotUrls": "https://i.gkd.li/i/19718162",
          "exampleUrls": "https://e.gkd.li/5deac756-01a5-4ee0-a26f-9fb659115f78"
        },
        {
          "matches": "[vid=\"reading__close_ad_view__subtitle_tv\"][visibleToUser=true]",
          "preKeys": [
            0
          ],
          "snapshotUrls": "https://i.gkd.li/i/19718162",
          "exampleUrls": "https://e.gkd.li/6e2c9635-4084-47e1-b255-4bc9728a7528",
          "key": 1
        }
      ]
    },
    {
      "name": "未分类-关闭[个性推荐开启提示]",
      "enable": false,
      "key": 4,
      "rules": [
        {
          "matches": "@ImageView[id!=null][clickable=true] -2 [text=\"个性推荐获得更丰富内容\"]",
          "snapshotUrls": "https://i.gkd.li/i/12829403",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-主页信息流广告",
      "enable": false,
      "fastQuery": true,
      "key": 5,
      "rules": [
        {
          "matches": "@[id!=null][desc=\"负反馈\"][visibleToUser=true] -n * > * > [text=\"广告\"]",
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/12894221",
            "https://i.gkd.li/i/12893649"
          ]
        },
        {
          "matches": "@FrameLayout > ViewGroup > [text=\"不感兴趣\"]",
          "preKeys": 0,
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/i/12894234",
            "https://i.gkd.li/i/13196059"
          ]
        }
      ]
    },
    {
      "name": "全屏广告-关闭[个性推荐开启提示]",
      "enable": false,
      "key": 6,
      "rules": [
        {
          "matches": "@ImageView[id!=null][clickable=true] -2 [text=\"个性推荐获得更丰富内容\"]",
          "snapshotUrls": "https://i.gkd.li/import/12829403",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-主页信息流广告",
      "enable": false,
      "fastQuery": true,
      "key": 7,
      "rules": [
        {
          "matches": "@[id!=null][desc=\"负反馈\"][visibleToUser=true] -n * > * > [text=\"广告\"]",
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/import/12894221",
            "https://i.gkd.li/import/12893649"
          ]
        },
        {
          "matches": "@FrameLayout > ViewGroup > [text=\"不感兴趣\"]",
          "preKeys": 0,
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/import/12894234",
            "https://i.gkd.li/import/13196059"
          ]
        }
      ]
    },
    {
      "name": "关闭[个性推荐开启提示]",
      "enable": false,
      "key": 8,
      "rules": [
        {
          "matches": "@ImageView[id!=null][clickable=true] -2 [text=\"个性推荐获得更丰富内容\"]",
          "snapshotUrls": "https://i.gkd.li/import/12829403",
          "key": 0
        }
      ]
    },
    {
      "name": "主页信息流广告",
      "enable": false,
      "quickFind": true,
      "key": 9,
      "rules": [
        {
          "matches": "@[id!=null][desc=\"负反馈\"][visibleToUser=true] -n * > * > [text=\"广告\"]",
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/import/12894221",
            "https://i.gkd.li/import/12893649"
          ]
        },
        {
          "matches": "@FrameLayout > ViewGroup > [text=\"不感兴趣\"]",
          "preKeys": 0,
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/import/12894234",
            "https://i.gkd.li/import/13196059"
          ]
        }
      ]
    }
  ]
});
