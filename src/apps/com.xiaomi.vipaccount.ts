// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "小米社区",
  "id": "com.xiaomi.vipaccount",
  "groups": [
    {
      "name": "更新提示",
      "enable": false,
      "actionMaximum": 1,
      "resetMatch": "app",
      "order": -9,
      "key": 0,
      "rules": [
        {
          "matches": "@[text=\"稍后安装\"] < LinearLayout - ScrollView >(4) [text=\"发现新版本\"]",
          "activityIds": "miuix.appcompat.app.AlertDialog",
          "snapshotUrls": "https://i.gkd.li/i/12642466",
          "key": 0
        },
        {
          "matches": "@[text=\"稍后安装\"] < LinearLayout - ScrollView >(4) [text=\"发现新版本\"]",
          "key": 1
        }
      ]
    },
    {
      "name": "局部广告-评论区卡片广告",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": "[text=\"closeGray\"][clickable=true]",
          "activityIds": "com.xiaomi.vipaccount.newbrowser.NormalWebActivity",
          "snapshotUrls": "https://i.gkd.li/i/12642459",
          "key": 0
        },
        {
          "matches": "[text=\"closeGray\"][clickable=true]",
          "activityIds": ".newbrowser.NormalWebActivity",
          "snapshotUrls": "https://i.gkd.li/i/12642459",
          "key": 1
        }
      ]
    },
    {
      "name": "全屏广告-签到弹窗",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "[text=\"签到赢权益\"] +n Image[text*=\"cancel_circle\"]",
          "activityIds": "com.xiaomi.vipaccount.newbrowser.NormalWebActivity",
          "snapshotUrls": "https://i.gkd.li/i/13328271",
          "key": 0
        },
        {
          "matches": "[text=\"签到赢权益\"] +n Image[text*=\"cancel_circle\"]",
          "activityIds": ".newbrowser.NormalWebActivity",
          "snapshotUrls": "https://i.gkd.li/i/13328271",
          "key": 1
        },
        {
          "matches": "[text=\"签到赢权益\"] +n Image[text*=\"cancel_circle\"]",
          "key": 2
        }
      ]
    },
    {
      "name": "全屏广告-公告板弹窗",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 3,
      "rules": [
        {
          "anyMatches": [
            "[desc=\"公告版弹窗\"] +2 [id=\"com.xiaomi.vipaccount:id/close\"]",
            "[desc=\"公告版弹窗\"] + ViewGroup[vid=\"image_container\"] > [id=\"com.xiaomi.vipaccount:id/close\"]"
          ],
          "activityIds": [
            "com.xiaomi.vipaccount.ui.home.page.HomeFrameActivity",
            "com.xiaomi.vipaccount.newbrowser.NormalWebActivity"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/13400617",
            "https://i.gkd.li/i/24289621"
          ],
          "exampleUrls": "https://e.gkd.li/46e16bc5-2f13-408e-9c34-927a13ba3e9c",
          "key": 0
        },
        {
          "anyMatches": [
            "[desc=\"公告版弹窗\"] +2 [vid=\"close\"]",
            "[desc=\"公告版弹窗\"] + ViewGroup[vid=\"image_container\"] > [vid=\"close\"]"
          ],
          "activityIds": [
            ".ui.home.page.HomeFrameActivity",
            ".newbrowser.NormalWebActivity"
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/13400617",
            "https://i.gkd.li/i/24289621"
          ],
          "exampleUrls": "https://e.gkd.li/46e16bc5-2f13-408e-9c34-927a13ba3e9c",
          "key": 1
        },
        {
          "matches": "[desc=\"公告版弹窗\"] +2 [id=\"com.xiaomi.vipaccount:id/close\"]",
          "key": 2
        },
        {
          "matches": "[desc=\"公告版弹窗\"] +2 [id=\"com.xiaomi.vipaccount:id/close\"]",
          "activityIds": "com.xiaomi.vipaccount.ui.home.page.HomeFrameActivity",
          "snapshotUrls": "https://i.gkd.li/i/13400617",
          "key": 3
        }
      ]
    },
    {
      "name": "未分类-评论区广告卡片",
      "enable": false,
      "key": 4,
      "rules": [
        {
          "matches": "[text=\"closeGray\"][clickable=true]",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-签到弹窗",
      "enable": false,
      "key": 5,
      "rules": [
        {
          "matches": "[text=\"签到赢权益\"] +n Image[text*=\"cancel_circle\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-公告板弹窗",
      "enable": false,
      "fastQuery": true,
      "key": 6,
      "rules": [
        {
          "matches": "[desc=\"公告版弹窗\"] +2 [id=\"com.xiaomi.vipaccount:id/close\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-评论区广告卡片",
      "enable": false,
      "key": 7,
      "rules": [
        {
          "matches": "[text=\"closeGray\"][clickable=true]",
          "key": 0
        }
      ]
    },
    {
      "name": "更新弹窗",
      "enable": false,
      "key": 8,
      "rules": [
        {
          "matches": "@[text=\"稍后安装\"] < LinearLayout - ScrollView >(4) [text=\"发现新版本\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "评论区广告卡片",
      "enable": false,
      "key": 9,
      "rules": [
        {
          "matches": "[text=\"closeGray\"][clickable=true]",
          "key": 0
        }
      ]
    },
    {
      "name": "签到弹窗",
      "enable": false,
      "key": 10,
      "rules": [
        {
          "matches": "[text=\"签到赢权益\"] +n Image[text*=\"cancel_circle\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "公告板弹窗",
      "enable": false,
      "quickFind": true,
      "key": 11,
      "rules": [
        {
          "matches": "[desc=\"公告版弹窗\"] +2 [id=\"com.xiaomi.vipaccount:id/close\"]",
          "key": 0
        }
      ]
    }
  ]
});
