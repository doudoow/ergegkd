// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "游民星空",
  "id": "com.gamersky",
  "groups": [
    {
      "name": "开屏广告",
      "matchTime": 10000,
      "actionMaximum": 1,
      "actionMaximumKey": 0,
      "resetMatch": "app",
      "priorityTime": 10000,
      "order": -10,
      "key": 0,
      "rules": [
        {
          "matches": "[text*=\"跳过\"][text.length<10][width<500 && height<300][visibleToUser=true]",
          "fastQuery": true,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/16322789"
        },
        {
          "anyMatches": [
            "@View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0] <n FrameLayout[childCount>2][text=null][desc=null] >(n+6) [text*=\"第三方应用\" || text*=\"扭动手机\" || text*=\"点击或上滑\" || text*=\"省钱好物\" || text*=\"扭一扭\"][visibleToUser=true]",
            "FrameLayout > FrameLayout[childCount>2][text=null][desc=null] > @View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0][visibleToUser=true]"
          ],
          "fastQuery": true,
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/16333782"
        },
        {
          "matches": "[vid=\"ms_skipView\"]",
          "fastQuery": true,
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/16860311",
          "excludeSnapshotUrls": "https://i.gkd.li/i/16902939",
          "exampleUrls": "https://e.gkd.li/4b7fd3fe-8467-49e3-93af-64515416911c"
        },
        {
          "matches": "[vid=\"animation_view\"][visibleToUser=true]",
          "position": {
            "left": "width * 0.9041",
            "top": "width * 0.1598"
          },
          "fastQuery": true,
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/17565808",
          "exampleUrls": "https://e.gkd.li/6bca4f19-320d-42e4-affb-4667a8112653"
        }
      ]
    },
    {
      "name": "局部广告-卡片广告",
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": [
            "[text=\"广告\" || vid=\"badge\"][visibleToUser=true]",
            "[vid=\"delete\" || vid=\"close\"][visibleToUser=true]"
          ],
          "activityIds": [
            ".main.activity.LibMainActivity",
            ".common.activity.LibDetailContentDetailActivity"
          ],
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/18122883",
            "https://i.gkd.li/i/18122884",
            "https://i.gkd.li/i/20422031"
          ]
        },
        {
          "matches": "WebView >2 View[childCount=2] > View[index=1] > @View[clickable=true][visibleToUser=true][childCount=0] <<n [vid=\"contentWebView\"]",
          "activityIds": "com.gamersky.common.activity.LibDetailContentDetailActivity",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/14622935",
          "excludeSnapshotUrls": "https://i.gkd.li/i/14892583"
        },
        {
          "matches": "@[clickable=true][visibleToUser=true][text=\"\"] - [childCount=0][text=\"广告\"] <<n [vid=\"nested_view_group\" || vid=\"contentWebView\"]",
          "activityIds": "com.gamersky.common.activity.LibDetailContentDetailActivity",
          "key": 2,
          "snapshotUrls": [
            "https://i.gkd.li/i/13635579",
            "https://i.gkd.li/i/15477470",
            "https://i.gkd.li/i/17356753"
          ]
        },
        {
          "matches": "[vid=\"recommended_reviews_or_rating_close_img\"]",
          "activityIds": "com.gamersky.main.activity.LibMainActivity",
          "key": 3,
          "snapshotUrls": "https://i.gkd.li/i/16556122",
          "exampleUrls": "https://e.gkd.li/f214c099-c22a-4c20-abc0-4cdddc2fe614"
        },
        {
          "matches": "WebView >2 View[childCount=2] > View[index=1] > @View[clickable=true][visibleToUser=true][childCount=0] <<n [vid=\"contentWebView\"]",
          "activityIds": ".common.activity.LibDetailContentDetailActivity",
          "key": 4,
          "snapshotUrls": "https://i.gkd.li/i/14622935",
          "excludeSnapshotUrls": "https://i.gkd.li/i/14892583"
        },
        {
          "matches": "@[clickable=true][visibleToUser=true][text=\"\"] - [childCount=0][text=\"广告\"] <<n [vid=\"nested_view_group\" || vid=\"contentWebView\"]",
          "activityIds": ".common.activity.LibDetailContentDetailActivity",
          "key": 5,
          "snapshotUrls": [
            "https://i.gkd.li/i/13635579",
            "https://i.gkd.li/i/15477470",
            "https://i.gkd.li/i/17356753"
          ]
        },
        {
          "matches": "[vid=\"recommended_reviews_or_rating_close_img\"]",
          "activityIds": ".main.activity.LibMainActivity",
          "key": 6,
          "snapshotUrls": "https://i.gkd.li/i/16556122",
          "exampleUrls": "https://e.gkd.li/f214c099-c22a-4c20-abc0-4cdddc2fe614"
        }
      ]
    },
    {
      "name": "功能类-签到成功弹窗",
      "desc": "点击[确定]",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 2,
      "rules": [
        {
          "matches": [
            "[text=\"签到成功！\"]",
            "[text=\"确定\"]"
          ],
          "activityIds": "com.gamersky.main.activity.LibMainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/14761502",
          "exampleUrls": "https://m.gkd.li/57941037/696e417a-3100-43a2-a401-f4f80dfa9f47",
          "key": 0
        },
        {
          "matches": "[text=\"签到成功！\"] < * > [text=\"确定\"]",
          "activityIds": "com.gamersky.main.activity.LibMainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/14761502",
          "exampleUrls": "https://m.gkd.li/57941037/696e417a-3100-43a2-a401-f4f80dfa9f47",
          "key": 1
        },
        {
          "matches": [
            "[text=\"签到成功！\"]",
            "[text=\"确定\"]"
          ],
          "activityIds": ".main.activity.LibMainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/14761502",
          "exampleUrls": "https://m.gkd.li/57941037/696e417a-3100-43a2-a401-f4f80dfa9f47",
          "key": 2
        }
      ]
    },
    {
      "name": "局部广告-卡片式广告",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": "[text=\"广告\"] < * + [id=\"com.gamersky:id/delete\"]",
          "activityIds": "com.gamersky.main.activity.LibMainActivity",
          "fastQuery": true,
          "key": 0,
          "name": "首页卡片广告",
          "snapshotUrls": [
            "https://i.gkd.li/i/13451220",
            "https://i.gkd.li/i/13635580"
          ]
        },
        {
          "matches": "WebView >2 View[childCount=2] > View[index=1] > View[childCount=0][clickable=true][visibleToUser=true]",
          "activityIds": "com.gamersky.common.activity.LibDetailContentDetailActivity",
          "key": 1,
          "name": "正文底部卡片广告",
          "snapshotUrls": [
            "https://i.gkd.li/i/13451258",
            "https://i.gkd.li/i/14622935",
            "https://i.gkd.li/i/14892583"
          ]
        },
        {
          "matches": "View[childCount=2] > [text=\"广告\"] + View[clickable=true]",
          "activityIds": "com.gamersky.common.activity.LibDetailContentDetailActivity",
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/13635579"
        },
        {
          "matches": "@[id=\"com.gamersky:id/close\"][clickable=true][visibleToUser=true] - * > [id=\"com.gamersky:id/badge\"]",
          "activityIds": "com.gamersky.common.activity.LibDetailContentDetailActivity",
          "fastQuery": true,
          "key": 3,
          "name": "评论区卡片广告",
          "snapshotUrls": "https://i.gkd.li/i/13759484"
        }
      ]
    },
    {
      "name": "卡片式广告",
      "enable": false,
      "key": 4,
      "rules": [
        {
          "matches": "[text=\"广告\"] < * + [id=\"com.gamersky:id/delete\"]",
          "activityIds": "com.gamersky.main.activity.LibMainActivity",
          "quickFind": true,
          "key": 0,
          "name": "首页卡片广告",
          "snapshotUrls": [
            "https://i.gkd.li/import/13451220",
            "https://i.gkd.li/import/13635580"
          ]
        },
        {
          "matches": "View[childCount=2] > [text=\"广告\"] + View[clickable=true]",
          "activityIds": "com.gamersky.common.activity.LibDetailContentDetailActivity",
          "key": 1,
          "name": "正文底部卡片广告",
          "snapshotUrls": "https://i.gkd.li/import/13451258"
        },
        {
          "matches": "@[id=\"com.gamersky:id/close\"][clickable=true][visibleToUser=true] - * > [id=\"com.gamersky:id/badge\"]",
          "activityIds": "com.gamersky.common.activity.LibDetailContentDetailActivity",
          "quickFind": true,
          "key": 2,
          "name": "评论区卡片广告",
          "snapshotUrls": "https://i.gkd.li/import/13759484"
        }
      ]
    }
  ]
});
