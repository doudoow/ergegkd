// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "网上国网",
  "id": "com.sgcc.wsgw.cn",
  "groups": [
    {
      "name": "分段广告-首页弹窗广告",
      "key": 0,
      "rules": [
        {
          "matches": "@[focusable=true] + [text=\"今日不再出现\"]",
          "actionCd": 2000,
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/12745042",
            "https://i.gkd.li/i/13247655"
          ]
        },
        {
          "matches": "ViewGroup[childCount=1] > @ViewGroup[childCount=1] > ImageView",
          "actionDelay": 300,
          "preKeys": [
            0
          ],
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/i/13247655",
            "https://i.gkd.li/i/13247655"
          ]
        },
        {
          "matches": "[id=\"com.sgcc.wsgw.cn:id/news_remind_laytout\"] >n [id=\"com.sgcc.wsgw.cn:id/btn_remind_close\"]",
          "actionDelay": 300,
          "preKeys": [
            0
          ],
          "fastQuery": true,
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/12745042"
        },
        {
          "matches": "[vid=\"news_remind_laytout\"] >n [vid=\"btn_remind_close\"]",
          "actionDelay": 300,
          "preKeys": [
            0
          ],
          "fastQuery": true,
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/12745042"
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
          "matches": "@ImageView < ViewGroup -3 [text=\"有新版本啦!\"]",
          "activityIds": "com.sgcc.wsgw.rnbundle.activity.HomeReactActivity",
          "snapshotUrls": "https://i.gkd.li/i/13501638",
          "key": 0
        },
        {
          "matches": "@ImageView < ViewGroup -3 [text=\"有新版本啦!\"]",
          "key": 1
        }
      ]
    },
    {
      "name": "未分类-首页弹窗广告",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "@[focusable=true] + [text=\"今日不再出现\"]",
          "actionCd": 2000,
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/12745042",
            "https://i.gkd.li/i/13247655"
          ]
        },
        {
          "matches": "ViewGroup[childCount=1] > @ViewGroup[childCount=1] > ImageView",
          "actionDelay": 300,
          "preKeys": 0,
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/i/13247655",
            "https://i.gkd.li/i/13247655"
          ]
        },
        {
          "matches": "[id=\"com.sgcc.wsgw.cn:id/news_remind_laytout\"] >n [id=\"com.sgcc.wsgw.cn:id/btn_remind_close\"]",
          "actionDelay": 300,
          "preKeys": 0,
          "fastQuery": true,
          "key": 2,
          "snapshotUrls": [
            "https://i.gkd.li/i/12745042"
          ]
        }
      ]
    },
    {
      "name": "未分类-版本更新",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 3,
      "rules": [
        {
          "matches": "@ImageView < ViewGroup -3 [text=\"有新版本啦!\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-首页弹窗广告",
      "enable": false,
      "key": 4,
      "rules": [
        {
          "matches": "@[focusable=true] + [text=\"今日不再出现\"]",
          "actionCd": 2000,
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/import/12745042",
            "https://i.gkd.li/import/13247655"
          ]
        },
        {
          "matches": "ViewGroup[childCount=1] > @ViewGroup[childCount=1] > ImageView",
          "actionDelay": 300,
          "preKeys": 0,
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/import/13247655",
            "https://i.gkd.li/import/13247655"
          ]
        },
        {
          "matches": "[id=\"com.sgcc.wsgw.cn:id/news_remind_laytout\"] >n [id=\"com.sgcc.wsgw.cn:id/btn_remind_close\"]",
          "actionDelay": 300,
          "preKeys": 0,
          "fastQuery": true,
          "key": 2,
          "snapshotUrls": [
            "https://i.gkd.li/import/12745042"
          ]
        }
      ]
    },
    {
      "name": "首页弹窗广告",
      "enable": false,
      "key": 5,
      "rules": [
        {
          "matches": "@[focusable=true] + [text=\"今日不再出现\"]",
          "actionCd": 2000,
          "quickFind": true,
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/import/12745042",
            "https://i.gkd.li/import/13247655"
          ]
        },
        {
          "matches": "ViewGroup[childCount=1] > @ViewGroup[childCount=1] > ImageView",
          "actionDelay": 300,
          "preKeys": 0,
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/import/13247655",
            "https://i.gkd.li/import/13247655"
          ]
        },
        {
          "matches": "[id=\"com.sgcc.wsgw.cn:id/news_remind_laytout\"] >n [id=\"com.sgcc.wsgw.cn:id/btn_remind_close\"]",
          "actionDelay": 300,
          "preKeys": 0,
          "quickFind": true,
          "key": 2,
          "snapshotUrls": [
            "https://i.gkd.li/import/12745042"
          ]
        }
      ]
    },
    {
      "name": "版本更新",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "quickFind": true,
      "key": 6,
      "rules": [
        {
          "matches": "@ImageView < ViewGroup -3 [text=\"有新版本啦!\"]",
          "key": 0
        }
      ]
    }
  ]
});
