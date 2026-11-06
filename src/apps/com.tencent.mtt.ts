// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "QQ浏览器",
  "id": "com.tencent.mtt",
  "groups": [
    {
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "actionMaximumKey": 0,
      "resetMatch": "app",
      "priorityTime": 10000,
      "fastQuery": true,
      "quickFind": true,
      "order": -10,
      "key": 0,
      "rules": [
        {
          "matches": "@LinearLayout[clickable=true] > TextView[text=\"跳过\"]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/12472630"
        },
        {
          "matches": "@View[clickable=true][childCount=0] +2 * >3 [text^=\"向上滑动\"][visibleToUser=true]",
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/i/14819586",
            "https://i.gkd.li/i/23743205"
          ]
        },
        {
          "matches": "@View[clickable=true] +2 * >3 [text=\"向上滑动查看\"]",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/14819586"
        }
      ]
    },
    {
      "name": "分段广告-小说阅读页面-卡片广告",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": "@ViewGroup[clickable=true][visibleToUser=true] > ViewGroup > [desc=\"广告\"]",
          "excludeMatches": "[desc=\"屏蔽此广告\"||desc=\"不感兴趣\"]",
          "actionCd": 3000,
          "key": 0,
          "name": "点击广告按钮",
          "snapshotUrls": [
            "https://i.gkd.li/i/12907446",
            "https://i.gkd.li/i/12907445"
          ]
        },
        {
          "matches": "@ViewGroup[childCount=1 || childCount=3] > [desc=\"屏蔽此广告\" || desc=\"直接关闭\"]",
          "preKeys": [
            0
          ],
          "forcedTime": 10000,
          "key": 1,
          "name": "点击[屏蔽此广告]/[直接关闭]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12907654",
            "https://i.gkd.li/i/12907651",
            "https://i.gkd.li/i/12907655",
            "https://i.gkd.li/i/12907653"
          ]
        },
        {
          "matches": "@ViewGroup > [desc=\"屏蔽此广告\"]",
          "preKeys": 0,
          "key": 2,
          "name": "点击[屏蔽此广告]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12907654",
            "https://i.gkd.li/i/12907651"
          ]
        },
        {
          "matches": "@ViewGroup > [desc=\"不感兴趣\"]",
          "preKeys": 2,
          "key": 3,
          "name": "点击[不感兴趣]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12907655",
            "https://i.gkd.li/i/12907653"
          ]
        }
      ]
    },
    {
      "name": "分段广告-小说阅读页面-视频广告",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "[text=\"腾讯广告\"] >n [id^=\"button_close\"]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/12909822"
        },
        {
          "matches": "[id=\"com.tencent.mtt:id/reward_dialog_close\"]",
          "preKeys": [
            0
          ],
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/12908955"
        },
        {
          "matches": "[id=\"com.tencent.mtt:id/reward_dialog_close\"]",
          "preKeys": 0,
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/12908955"
        },
        {
          "matches": "[vid=\"reward_dialog_close\"]",
          "preKeys": [
            0
          ],
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/12908955"
        }
      ]
    },
    {
      "name": "分段广告-文件界面-卡片广告",
      "desc": "①点击[广告] ②点击[不感兴趣]",
      "actionCd": 5000,
      "fastQuery": true,
      "key": 3,
      "rules": [
        {
          "matches": "ImageView[visibleToUser=true] < @[clickable=true] < [childCount=1] <3 [childCount=5] >6 [vid=\"video_wonder_video_view\"]",
          "key": 0,
          "name": "①点击[广告]",
          "snapshotUrls": [
            "https://i.gkd.li/i/31367445",
            "https://i.gkd.li/i/31367447"
          ],
          "exampleUrls": "https://e.gkd.li/a8d89cb8-fa33-4400-a4e1-e8cceb148ac5"
        },
        {
          "matches": "[desc=\"不感兴趣\"] < @[clickable=true] <n ViewGroup < ViewGroup < ViewGroup < ViewGroup < FrameLayout < FrameLayout < [id=\"android:id/content\"]",
          "preKeys": [
            0
          ],
          "key": 1,
          "name": "②点击[不感兴趣]",
          "snapshotUrls": "https://i.gkd.li/i/31371556"
        }
      ]
    },
    {
      "name": "局部广告-小说阅读页面-卡片广告",
      "enable": false,
      "key": 4,
      "rules": [
        {
          "matches": "@ViewGroup[clickable=true][visibleToUser=true] > ViewGroup > [desc=\"广告\"]",
          "excludeMatches": "[desc=\"屏蔽此广告\"||desc=\"不感兴趣\"]",
          "actionCd": 3000,
          "key": 0,
          "name": "点击广告按钮",
          "snapshotUrls": [
            "https://i.gkd.li/import/12907446",
            "https://i.gkd.li/import/12907445"
          ]
        },
        {
          "matches": "@ViewGroup > [desc=\"屏蔽此广告\"]",
          "preKeys": 0,
          "key": 1,
          "name": "点击[屏蔽此广告]",
          "snapshotUrls": [
            "https://i.gkd.li/import/12907654",
            "https://i.gkd.li/import/12907651"
          ]
        },
        {
          "matches": "@ViewGroup > [desc=\"不感兴趣\"]",
          "preKeys": 1,
          "key": 2,
          "name": "点击[不感兴趣]",
          "snapshotUrls": [
            "https://i.gkd.li/import/12907655",
            "https://i.gkd.li/import/12907653"
          ]
        }
      ]
    },
    {
      "name": "全屏广告-小说阅读页面-视频广告",
      "enable": false,
      "key": 5,
      "rules": [
        {
          "matches": "[text=\"腾讯广告\"] >n [id^=\"button_close\"]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/import/12909822"
        },
        {
          "matches": "[id=\"com.tencent.mtt:id/reward_dialog_close\"]",
          "preKeys": 0,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/import/12908955"
        }
      ]
    },
    {
      "name": "小说阅读页面-卡片广告",
      "enable": false,
      "key": 6,
      "rules": [
        {
          "matches": "@ViewGroup[clickable=true][visibleToUser=true] > ViewGroup > [desc=\"广告\"]",
          "excludeMatches": "[desc=\"屏蔽此广告\"||desc=\"不感兴趣\"]",
          "actionCd": 3000,
          "key": 0,
          "name": "点击广告按钮",
          "snapshotUrls": [
            "https://i.gkd.li/import/12907446",
            "https://i.gkd.li/import/12907445"
          ]
        },
        {
          "matches": "@ViewGroup > [desc=\"屏蔽此广告\"]",
          "preKeys": 0,
          "key": 1,
          "name": "点击[屏蔽此广告]",
          "snapshotUrls": [
            "https://i.gkd.li/import/12907654",
            "https://i.gkd.li/import/12907651"
          ]
        },
        {
          "matches": "@ViewGroup > [desc=\"不感兴趣\"]",
          "preKeys": 1,
          "key": 2,
          "name": "点击[不感兴趣]",
          "snapshotUrls": [
            "https://i.gkd.li/import/12907655",
            "https://i.gkd.li/import/12907653"
          ]
        }
      ]
    },
    {
      "name": "小说阅读页面-视频广告",
      "enable": false,
      "key": 7,
      "rules": [
        {
          "matches": "[text=\"腾讯广告\"] >n [id^=\"button_close\"]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/import/12909822"
        },
        {
          "matches": "[id=\"com.tencent.mtt:id/reward_dialog_close\"]",
          "preKeys": 0,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/import/12908955"
        }
      ]
    }
  ]
});
