// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "十六番旅行",
  "id": "com.fan.app",
  "groups": [
    {
      "name": "分段广告-卡片广告",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "@View[clickable=true][childCount=0] < FrameLayout[desc^=\"dislike\"] + FrameLayout >2 [text=\"广告\"]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/13258021"
        },
        {
          "matches": "@LinearLayout > [text=\"不感兴趣\"]",
          "preKeys": [
            0
          ],
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/13258015"
        }
      ]
    },
    {
      "name": "权限提示-通知权限",
      "desc": "点击[以后再说]",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "[id=\"com.fan.app:id/tv_nj_later\"]",
          "activityIds": "com.mvc.activity.HomepageActivity2",
          "snapshotUrls": "https://i.gkd.li/i/13601734",
          "key": 0
        },
        {
          "matches": "[vid=\"tv_nj_later\"]",
          "activityIds": "com.mvc.activity.HomepageActivity2",
          "snapshotUrls": "https://i.gkd.li/i/13601734",
          "key": 1
        }
      ]
    },
    {
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "actionMaximumKey": 0,
      "resetMatch": "app",
      "order": -10,
      "key": 2,
      "rules": [
        {
          "matches": "[text*=\"跳过\"][text.length<10][visibleToUser=true]",
          "fastQuery": true,
          "key": 0
        },
        {
          "matches": "[childCount=0][visibleToUser=true][(text.length<10 && (text*=\"跳过\" || text*=\"跳過\" || text*=\"skip\" || text*=\"Skip\")) || id$=\"tt_splash_skip_btn\" || vid*=\"skip\" || vid*=\"Skip\" || desc*=\"跳过\" || desc*=\"skip\" || (vid*=\"count\" && vid*=\"down\" && vid!*=\"countdown\" && vid!*=\"load\" && vid!*=\"add\" && vid!*=\"ead\" && vid!*=\"time\")]",
          "key": 1
        },
        {
          "matches": "[vid=\"LinearLayoutSplAd\"] >4 View[clickable=true]",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/14548642"
        }
      ]
    },
    {
      "name": "综合广告-广告卡片",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": "[desc^=\"dislike\"] > View",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/13258021"
        },
        {
          "matches": "@LinearLayout > [text=\"不感兴趣\"]",
          "preKeys": 0,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/13258015"
        },
        {
          "matches": "@Image < View -2 View >2 View > TextView[text=\"广告\"]",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/13258018"
        },
        {
          "matches": "[vid=\"relativeLayout3AdContainer\"] >7 [desc^=\"close-fill\"] > View[clickable=true]",
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/14548514"
        }
      ]
    },
    {
      "name": "权限提示-通知提示",
      "desc": "自动点击“以后再说”",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "fastQuery": true,
      "key": 4,
      "rules": [
        {
          "matches": "[id=\"com.fan.app:id/tv_nj_later\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-广告卡片",
      "enable": false,
      "key": 5,
      "rules": [
        {
          "matches": "[desc^=\"dislike\"] > View",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/import/13258021"
        },
        {
          "matches": "@LinearLayout > [text=\"不感兴趣\"]",
          "preKeys": 0,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/import/13258015"
        },
        {
          "matches": "@Image < View -2 View >2 View > TextView[text=\"广告\"]",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/import/13258018"
        }
      ]
    },
    {
      "name": "全屏广告-开启通知弹窗",
      "desc": "自动点击“以后再说”",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "fastQuery": true,
      "key": 6,
      "rules": [
        {
          "matches": "[id=\"com.fan.app:id/tv_nj_later\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "广告卡片",
      "enable": false,
      "key": 7,
      "rules": [
        {
          "matches": "[desc^=\"dislike\"] > View",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/import/13258021"
        },
        {
          "matches": "@LinearLayout > [text=\"不感兴趣\"]",
          "preKeys": 0,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/import/13258015"
        },
        {
          "matches": "@Image < View -2 View >2 View > TextView[text=\"广告\"]",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/import/13258018"
        }
      ]
    },
    {
      "name": "开启通知弹窗",
      "desc": "自动点击“以后再说”",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "quickFind": true,
      "key": 8,
      "rules": [
        {
          "matches": "[id=\"com.fan.app:id/tv_nj_later\"]",
          "key": 0
        }
      ]
    }
  ]
});
