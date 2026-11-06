// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "腾讯新闻",
  "id": "com.tencent.news",
  "groups": [
    {
      "name": "分段广告-信息流广告",
      "desc": "自动点击\"更多\"->\"不感兴趣\"",
      "enable": false,
      "key": 0,
      "rules": [
        {
          "matches": "FrameLayout[id=\"android:id/content\"][childCount=1] >n [text=\"广告\"] +n [id=\"com.tencent.news:id/dislike_streamAd_more\"]",
          "key": 0,
          "name": "点击\"更多\"按钮",
          "snapshotUrls": [
            "https://i.gkd.li/i/12755834",
            "https://i.gkd.li/i/12755852"
          ]
        },
        {
          "matches": "[id=\"com.tencent.news:id/dislike_reason_view\"] >n [text=\"不感兴趣\"]",
          "preKeys": [
            2
          ],
          "key": 1,
          "name": "点击\"不感兴趣\"按钮",
          "snapshotUrls": "https://i.gkd.li/i/12755852"
        },
        {
          "matches": "FrameLayout[id=\"android:id/content\"][childCount=1] >n [text=\"广告\"] +n [vid=\"dislike_streamAd_more\"]",
          "key": 2,
          "name": "点击\"更多\"按钮",
          "snapshotUrls": [
            "https://i.gkd.li/i/12755834",
            "https://i.gkd.li/i/12755852"
          ]
        },
        {
          "matches": "[vid=\"dislike_reason_view\"] >n [text=\"不感兴趣\"]",
          "preKeys": [
            2
          ],
          "key": 3,
          "name": "点击\"不感兴趣\"按钮",
          "snapshotUrls": "https://i.gkd.li/i/12755852"
        }
      ]
    },
    {
      "name": "全屏广告-广告、活动弹窗",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": "@[text=\"关闭\"] + [text=\"查看活动详情\"]",
          "activityIds": "com.tencent.news.activity.SplashActivity",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/12755872"
        },
        {
          "matches": "@[text=\"关闭\"] + [text=\"查看活动详情\"]",
          "activityIds": ".activity.SplashActivity",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/12755872"
        }
      ]
    },
    {
      "name": "权限提示-通知权限",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 2,
      "rules": [
        {
          "matches": "[text=\"开启通知\"] + [text=\"先不了\"]",
          "activityIds": ".activity.SplashActivity",
          "snapshotUrls": "https://i.gkd.li/i/12755824",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-信息流广告",
      "desc": "自动点击【更多】->【不感兴趣】",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": "FrameLayout[id=\"android:id/content\"][childCount=1] >n [text=\"广告\"] +n [id=\"com.tencent.news:id/dislike_streamAd_more\"]",
          "key": 0,
          "name": "点击【更多】按钮",
          "snapshotUrls": [
            "https://i.gkd.li/i/12755834",
            "https://i.gkd.li/i/12755852",
            "https://i.gkd.li/i/12755914"
          ]
        },
        {
          "matches": "[id=\"com.tencent.news:id/dislike_reason_view\"] >n [text=\"不感兴趣\"]",
          "preKeys": [
            0
          ],
          "key": 1,
          "name": "点击【不感兴趣】按钮",
          "snapshotUrls": "https://i.gkd.li/i/12755852"
        }
      ]
    },
    {
      "name": "未分类-广告、活动弹窗",
      "enable": false,
      "key": 4,
      "rules": [
        {
          "matches": "@[text=\"关闭\"] + [text=\"查看活动详情\"]",
          "activityIds": "com.tencent.news.activity.SplashActivity",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/12755872"
        }
      ]
    },
    {
      "name": "未分类-请求通知权限弹窗",
      "enable": false,
      "key": 5,
      "rules": [
        {
          "matches": "[text=\"开启通知\"] + [text=\"先不了\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-信息流广告",
      "desc": "自动点击【更多】->【不感兴趣】",
      "enable": false,
      "key": 6,
      "rules": [
        {
          "matches": "FrameLayout[id=\"android:id/content\"][childCount=1] >n [text=\"广告\"] +n [id=\"com.tencent.news:id/dislike_streamAd_more\"]",
          "key": 0,
          "name": "点击【更多】按钮",
          "snapshotUrls": [
            "https://i.gkd.li/import/12755834",
            "https://i.gkd.li/import/12755852",
            "https://i.gkd.li/import/12755914"
          ]
        },
        {
          "matches": "[id=\"com.tencent.news:id/dislike_reason_view\"] >n [text=\"不感兴趣\"]",
          "preKeys": [
            0
          ],
          "key": 1,
          "name": "点击【不感兴趣】按钮",
          "snapshotUrls": "https://i.gkd.li/import/12755852"
        }
      ]
    },
    {
      "name": "全屏广告-请求通知权限弹窗",
      "enable": false,
      "key": 7,
      "rules": [
        {
          "matches": "[text=\"开启通知\"] + [text=\"先不了\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "信息流广告",
      "desc": "自动点击【更多】->【不感兴趣】",
      "enable": false,
      "key": 8,
      "rules": [
        {
          "matches": "FrameLayout[id=\"android:id/content\"][childCount=1] >n [text=\"广告\"] +n [id=\"com.tencent.news:id/dislike_streamAd_more\"]",
          "key": 0,
          "name": "点击【更多】按钮",
          "snapshotUrls": [
            "https://i.gkd.li/import/12755834",
            "https://i.gkd.li/import/12755852",
            "https://i.gkd.li/import/12755914"
          ]
        },
        {
          "matches": "[id=\"com.tencent.news:id/dislike_reason_view\"] >n [text=\"不感兴趣\"]",
          "preKeys": [
            0
          ],
          "key": 1,
          "name": "点击【不感兴趣】按钮",
          "snapshotUrls": "https://i.gkd.li/import/12755852"
        }
      ]
    },
    {
      "name": "广告、活动弹窗",
      "enable": false,
      "key": 9,
      "rules": [
        {
          "matches": "@[text=\"关闭\"] + [text=\"查看活动详情\"]",
          "activityIds": "com.tencent.news.activity.SplashActivity",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/import/12755872"
        }
      ]
    },
    {
      "name": "请求通知权限弹窗",
      "enable": false,
      "key": 10,
      "rules": [
        {
          "matches": "[text=\"开启通知\"] + [text=\"先不了\"]",
          "key": 0
        }
      ]
    }
  ]
});
